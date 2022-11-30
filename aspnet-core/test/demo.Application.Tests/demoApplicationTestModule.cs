using Volo.Abp.Modularity;

namespace demo;

[DependsOn(
    typeof(demoApplicationModule),
    typeof(demoDomainTestModule)
    )]
public class demoApplicationTestModule : AbpModule
{

}
