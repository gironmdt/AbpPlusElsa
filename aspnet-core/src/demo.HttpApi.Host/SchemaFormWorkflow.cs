using Elsa.Activities.Http;
using Elsa.Builders;
using System.Net;
using System.Net.Http;

namespace demo
{
    public class SchemaFormWorkflow : IWorkflow
    {
        public void Build(IWorkflowBuilder builder)
        {
            builder
                .WithDisplayName("Document Approval Workflow")
                .HttpEndpoint(activity => activity
                    .WithPath("/v2/schemaJson")
                    .WithMethod(HttpMethod.Get.Method)
                    .WithReadContent())
                .WriteHttpResponse(
                    HttpStatusCode.OK,
                    "{'root':'hello world', 'URL':''}",
                    "application/json");
        }

    }
}
