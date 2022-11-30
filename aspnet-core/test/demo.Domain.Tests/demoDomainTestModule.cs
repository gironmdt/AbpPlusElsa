using demo.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace demo;

[DependsOn(
    typeof(demoEntityFrameworkCoreTestModule)
    )]
public class demoDomainTestModule : AbpModule
{

}
