import type { ExecuteSignalRequest } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class ExecuteService {
  apiName = 'Default';
  

  handleBySignalNameAndRequestAndCancellationToken = (signalName: string, request: ExecuteSignalRequest, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/v1/signals/${signalName}/execute`,
      body: request,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
