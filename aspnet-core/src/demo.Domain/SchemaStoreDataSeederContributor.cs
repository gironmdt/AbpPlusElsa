using demo.DynamicForm;
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
    internal class SchemaStoreDataSeederContributor : IDataSeedContributor, ITransientDependency
    {
        private readonly IRepository<SchemaForm, Guid> _bookRepository;

        public SchemaStoreDataSeederContributor(IRepository<SchemaForm, Guid> schemaFormRepository)
        {
            _bookRepository = schemaFormRepository;
        }

        public async Task SeedAsync(DataSeedContext context)
        {
            if (await _bookRepository.GetCountAsync() <= 0)
            {
                await _bookRepository.InsertAsync(
                    new SchemaForm
                    {
                        PropertyBinding = "name",
                        Title = "Name",
                        Type = "Text"
                    },
                    autoSave: true
                );

                await _bookRepository.InsertAsync(
                    new SchemaForm
                    {
                        PropertyBinding = "email",
                        Title = "Email",
                        Type = "Text"
                    },
                    autoSave: true
                );
            }
        }
    }
}
