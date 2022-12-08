using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace demo.Approvals
{
    public interface IApprovalAppService :
        ICrudAppService< //Defines CRUD methods
            ApprovalDto, //Used to show books
            Guid, //Primary key of the book entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CreateUpdateApprovalDto> //Used to create/update a book
    {

    }
}
