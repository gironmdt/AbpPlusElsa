using demo.DocumentApproval;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace demo.Approvals
{
    public class ApprovalAppService :
        CrudAppService<
            Approval, //The Book entity
            ApprovalDto, //Used to show books
            Guid, //Primary key of the book entity
            PagedAndSortedResultRequestDto, //Used for paging/sorting
            CreateUpdateApprovalDto>, //Used to create/update a book
        IApprovalAppService //implement the IBookAppService
    {
        public ApprovalAppService(IRepository<Approval, Guid> repository)
            : base(repository)
        {

        }
    }
}
