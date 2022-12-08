import type { TriggerWorkflowsRequestModel } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class TriggerService {
  apiName = 'Default';
  

  handleByRequestAndCancellationToken = (request: TriggerWorkflowsRequestModel, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/v1/workflows/trigger',
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
