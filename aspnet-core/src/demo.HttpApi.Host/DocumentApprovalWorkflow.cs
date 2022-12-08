using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using demo.Schema;
using Elsa.Activities.ControlFlow;
using Elsa.Activities.Email;
using Elsa.Activities.Http;
using Elsa.Activities.Http.Extensions;
using Elsa.Activities.Http.Models;
using Elsa.Activities.Primitives;
using Elsa.Activities.Temporal;
using Elsa.Builders;
using Newtonsoft.Json.Linq;
using NodaTime;

namespace demo
{
    public class DocumentApprovalWorkflow : IWorkflow
    {

        private string BuildSchema()
        {
            var name = new DynamicSchemaFormDto("name", "Name", "Text");
            var email = new DynamicSchemaFormDto("email", "Email", "Text");
            var body = new DynamicSchemaFormDto("body", "Body", "Text");
            var list = new List<DynamicSchemaFormDto>();
            list.Add(name);
            list.Add(email);
            list.Add(body);
            var json = JObject.FromObject(new {ListSchema = list });

            return json.ToString();
        }

        public void Build(IWorkflowBuilder builder)
        {




            builder
                .WithDisplayName("Document Approval Workflow")
                .HttpEndpoint(activity => activity
                    .WithPath("/v1/schemaJson")
                    .WithMethod(HttpMethod.Get.Method)
                    .WithReadContent())
                .WriteHttpResponse(
                    HttpStatusCode.OK,
                    BuildSchema(),
                    "application/json");
            builder
            .WithDisplayName("Document Approval Workflow")
            .HttpEndpoint(activity => activity
                    .WithPath("/v1/documents")
                    .WithMethod(HttpMethod.Post.Method)
                    .WithReadContent())
                .SetVariable("Document", context => context.GetInput<HttpRequestModel>()!.Body)
                .SendEmail(activity => activity
                    .WithSender("workflow@acme.com")
                    .WithRecipient("josh@acme.com")
                    .WithSubject(context => $"Document received from {context.GetVariable<dynamic>("Document")!.name}")
                    .WithBody(context =>
                    {
                        var document = context.GetVariable<dynamic>("Document")!;
                        return $"Document from {document.name} received for review.<br><a href=\"{context.GenerateSignalUrl("Approve")}\">Approve</a> or <a href=\"{context.GenerateSignalUrl("Reject")}\">Reject</a>";
                    }))
                .WriteHttpResponse(
                    HttpStatusCode.OK,
                    "<h1>Request for Approval Sent</h1><p>Your document has been received and will be reviewed shortly.</p>",
                    "text/html")
                .Then<Fork>(activity => activity.WithBranches("Approve", "Reject", "Remind"), fork =>
                {
                    fork
                        .When("Approve")
                        .SignalReceived("Approve")
                        .SendEmail(activity => activity
                            .WithSender("workflow@acme.com")
                            .WithRecipient(context => context.GetVariable<dynamic>("Document")!.email)
                            .WithSubject(context => $"Document {context.GetVariable<dynamic>("Document")!.id} Approved!")
                            .WithBody(context => $"Great job {context.GetVariable<dynamic>("Document")!.name}, that document is perfect."))
                        .ThenNamed("Join");

                    fork
                        .When("Reject")
                        .SignalReceived("Reject")
                        .SendEmail(activity => activity
                            .WithSender("workflow@acme.com")
                            .WithRecipient(context => context.GetVariable<dynamic>("Document")!.email)
                            .WithSubject(context => $"Document {context.GetVariable<dynamic>("Document")!.id} Rejected")
                            .WithBody(context => $"Nice try {context.GetVariable<dynamic>("Document")!.name}, but that document needs work."))
                        .ThenNamed("Join");

                    fork
                        .When("Remind")
                        .Timer(Duration.FromSeconds(10)).WithName("Reminder")
                        .SendEmail(activity => activity
                                .WithSender("workflow@acme.com")
                                .WithRecipient("josh@acme.com")
                                .WithSubject(context => $"{context.GetVariable<dynamic>("Document")!.name} is waiting for your review!")
                                .WithBody(context =>
                                    $"Don't forget to review document {context.GetVariable<dynamic>("Document")!.id}.<br><a href=\"{context.GenerateSignalUrl("Approve")}\">Approve</a> or <a href=\"{context.GenerateSignalUrl("Reject")}\">Reject</a>"))
                            .ThenNamed("Reminder");
                })
                .Add<Join>(join => join.WithMode(Join.JoinMode.WaitAny)).WithName("Join")
                .WriteHttpResponse(HttpStatusCode.OK, "Thanks for the hard work!", "text/html")
                .Finish();
        }
    }
}
