import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../../../microsoft/asp-net-core/mvc/models';
import type { VersionOptions } from '../../../../../../models/models';
import type { IntellisenseContext } from '../../../../../../scripting/java-script/models/models';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  apiName = 'Default';
  

  handleByWorkflowDefinitionIdAndContextAndVersionAndCancellationToken = (workflowDefinitionId: string, context?: IntellisenseContext, version?: VersionOptions, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/v1/scripting/javascript/type-definitions/${workflowDefinitionId}`,
      params: { version },
      body: context,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
