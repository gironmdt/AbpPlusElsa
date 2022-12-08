using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Domain.Entities;

namespace demo.Approvals
{
    public class ApprovalDto: AuditedEntityDto<Guid>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Body { get; set; }
    }
}
