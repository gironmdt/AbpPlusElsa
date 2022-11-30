using Volo.Abp.Settings;

namespace demo.Settings;

public class demoSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(demoSettings.MySetting1));
    }
}
