using Volo.Abp.DependencyInjection;
using Volo.Abp.Ui.Branding;

namespace demo;

[Dependency(ReplaceServices = true)]
public class demoBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "demo";
}
