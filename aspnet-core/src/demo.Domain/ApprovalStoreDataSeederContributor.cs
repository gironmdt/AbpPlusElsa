using demo.DocumentApproval;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Data;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace demo
{
    public class ApprovalStoreDataSeederContributor
        : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<Approval, Guid> _bookRepository;

        public ApprovalStoreDataSeederContributor(IRepository<Approval, Guid> bookRepository)
        {
            _bookRepository = bookRepository;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (await _bookRepository.GetCountAsync() <= 0)
            {
                await _bookRepository.InsertAsync(
                    new Approval
                    {
                        Name = "1984",
                        Body = "xsq",
                        Email = "gironmdt@gmail.com"
                    },
                    autoSave: true
                );

                await _bookRepository.InsertAsync(
                    new Approval
                    {
                        Name = "19284",
                        Body = "x22sq",
                        Email = "g11ironmdt@gmail.com"
                    },
                    autoSave: true
                );
            }
        }
    }
}
