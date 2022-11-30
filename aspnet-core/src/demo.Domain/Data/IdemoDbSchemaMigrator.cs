using System.Threading.Tasks;

namespace demo.Data;

public interface IdemoDbSchemaMigrator
{
    Task MigrateAsync();
}
