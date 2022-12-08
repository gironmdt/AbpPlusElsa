import type { DispatchWorkflowDefinitionRequestModel } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class DispatchService {
  apiName = 'Default';
  

  handleByWorkflowDefinitionIdAndRequestAndCancellationToken = (workflowDefinitionId: string, request: DispatchWorkflowDefinitionRequestModel, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/v1/workflows/${workflowDefinitionId}/dispatch`,
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
