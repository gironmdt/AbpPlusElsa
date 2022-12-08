using AutoMapper;
using demo.Schema;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using demo.DynamicForm;
using demo.Application.Contrats.Schema;

namespace demo.Application.Schema
{
    public class SchemaStoreApplicationAutoMapperProfile : Profile
    {
        public SchemaStoreApplicationAutoMapperProfile()
        {
            CreateMap<SchemaForm, SchemaFormDto>();
            CreateMap<CreateUpdateSchemaDto, SchemaForm>();
        }
    }
}
