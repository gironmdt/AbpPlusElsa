using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;
using Volo.Abp.Domain.Entities.Auditing;

namespace demo.DocumentApproval
{
    public class Approval:Entity<Guid>
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Body { get; set; }

    }
}
