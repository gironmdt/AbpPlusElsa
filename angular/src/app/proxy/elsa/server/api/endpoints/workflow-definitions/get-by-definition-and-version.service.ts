import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';
import type { VersionOptions } from '../../../../models/models';

@Injectable({
  providedIn: 'root',
})
export class GetByDefinitionAndVersionService {
  apiName = 'Default';
  

  handleByWorkflowDefinitionIdAndVersionOptionsAndCancellationToken = (workflowDefinitionId: string, versionOptions: VersionOptions, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/v1/workflow-definitions/${workflowDefinitionId}/${versionOptions}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
