using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;

namespace demo.Schema
{
    public class SchemaFormDto : AuditedEntityDto<Guid>
    {
        public string PropertyBinding { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }
    }


    public class DynamicSchemaFormDto
    {
        public string PropertyBinding { get; set; }
        public string Title { get; set; }
        public string Type { get; set; }

        public DynamicSchemaFormDto(string propertyBinding, string title, string type)
        {
            PropertyBinding = propertyBinding;
            Title = title;
            Type = type;
        }
    }
}
