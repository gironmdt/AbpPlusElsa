using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace demo.Application.Contrats.Schema
{
    public class CreateUpdateSchemaDto
    {
        [Required]
        public string PropertyBinding { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string Type { get; set; }
    }
}
