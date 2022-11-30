using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace demo.Data;

/* This is used if database provider does't define
 * IdemoDbSchemaMigrator implementation.
 */
public class NulldemoDbSchemaMigrator : IdemoDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
