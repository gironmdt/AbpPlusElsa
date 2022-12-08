import type { BulkRetryWorkflowsRequest } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class BulkRetryService {
  apiName = 'Default';
  

  handleByRequestAndCancellationToken = (request: BulkRetryWorkflowsRequest, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/v1/workflow-instances/bulk/retry',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
