using demo.Application.Contrats.Schema;
using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace demo.Schema
{
    public interface ISchemalAppService: 
        ICrudAppService< //Defines CRUD methods
            SchemaFormDto, //Used to show books
            Guid, //Primary key of the book entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CreateUpdateSchemaDto> //Used to create/update a book
    {
    }
}
