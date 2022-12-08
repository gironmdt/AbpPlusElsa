using demo.Application.Contrats.Schema;
using demo.DynamicForm;
using demo.Schema;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace demo.Application.Schema
{
    public class SchemaAppService :
        CrudAppService<
            SchemaForm, //The Book entity
           SchemaFormDto, //Used to show books
            Guid, //Primary key of the book entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CreateUpdateSchemaDto>, //Used to create/update a book
        ISchemalAppService //implement the IBookAppService
    {
        public SchemaAppService(IRepository<SchemaForm, Guid> repository)
           : base(repository)
        {

        }
    }
}
