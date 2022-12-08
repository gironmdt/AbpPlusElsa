import type { BulkCancelWorkflowsRequest } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class BulkCancelService {
  apiName = 'Default';
  

  handleByRequestAndCancellationToken = (request: BulkCancelWorkflowsRequest, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/v1/workflow-instances/bulk/cancel',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
