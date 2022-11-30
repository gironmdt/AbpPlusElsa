using demo.EntityFrameworkCore;
using Volo.Abp.Autofac;
using Volo.Abp.BackgroundJobs;
using Volo.Abp.Modularity;

namespace demo.DbMigrator;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(demoEntityFrameworkCoreModule),
    typeof(demoApplicationContractsModule)
    )]
public class demoDbMigratorModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpBackgroundJobOptions>(options => options.IsJobExecutionEnabled = false);
    }
}
