using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace demo.DynamicForm
{
    public class SchemaForm : Entity<Guid>
    {
        public string PropertyBinding { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
    }
}
