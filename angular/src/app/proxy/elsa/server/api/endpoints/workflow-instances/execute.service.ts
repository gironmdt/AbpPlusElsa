import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';
import type { ExecuteWorkflowInstanceRequest } from '../../../../services/models';

@Injectable({
  providedIn: 'root',
})
export class ExecuteService {
  apiName = 'Default';
  

  handleByWorkflowInstanceIdAndRequestAndCancellationToken = (workflowInstanceId: string, request: ExecuteWorkflowInstanceRequest, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/v1/workflow-instances/${workflowInstanceId}/execute`,
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
