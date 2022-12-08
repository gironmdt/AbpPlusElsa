import type { ExecuteWorkflowDefinitionRequestModel } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class ExecuteService {
  apiName = 'Default';
  

  handleByWorkflowDefinitionIdAndRequestAndCancellationToken = (workflowDefinitionId: string, request: ExecuteWorkflowDefinitionRequestModel, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/v1/workflows/${workflowDefinitionId}/execute`,
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
