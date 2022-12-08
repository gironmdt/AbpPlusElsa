using AutoMapper;
using demo.DocumentApproval;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace demo.Approvals
{
    public class ApprovalStoreApplicationAutoMapperProfile : Profile
    {
        public ApprovalStoreApplicationAutoMapperProfile()
        {
            CreateMap<Approval, ApprovalDto>();
            CreateMap<CreateUpdateApprovalDto, Approval>();
        }
    }
}
