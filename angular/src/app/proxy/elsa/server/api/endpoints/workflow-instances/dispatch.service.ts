import type { DispatchWorkflowInstanceRequestModel } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class DispatchService {
  apiName = 'Default';
  

  handleByWorkflowInstanceIdAndRequestAndCancellationToken = (workflowInstanceId: string, request: DispatchWorkflowInstanceRequestModel, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/v1/workflow-instances/${workflowInstanceId}/dispatch`,
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
