import type { RetryWorkflowRequest } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class RetryService {
  apiName = 'Default';
  

  handleByIdAndOptionsAndCancellationToken = (id: string, options: RetryWorkflowRequest, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/v1/workflow-instances/${id}/retry`,
      body: options,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
