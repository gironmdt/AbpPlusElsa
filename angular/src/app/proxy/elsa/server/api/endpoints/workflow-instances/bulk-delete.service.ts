import type { BulkDeleteWorkflowsRequest } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class BulkDeleteService {
  apiName = 'Default';
  

  handleByRequestAndCancellationToken = (request: BulkDeleteWorkflowsRequest, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'DELETE',
      url: '/v1/workflow-instances/bulk',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
