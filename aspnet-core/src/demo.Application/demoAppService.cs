using System;
using System.Collections.Generic;
using System.Text;
using demo.Localization;
using Volo.Abp.Application.Services;

namespace demo;

/* Inherit your application services from this class.
 */
public abstract class demoAppService : ApplicationService
{
    protected demoAppService()
    {
        LocalizationResource = typeof(demoResource);
    }
}
