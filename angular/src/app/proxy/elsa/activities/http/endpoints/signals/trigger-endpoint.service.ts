import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class TriggerEndpointService {
  apiName = 'Default';
  

  handleByTokenAndCancellationToken = (token: string, cancellationToken: any, apiVersion: string = "1.0") =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/signals/trigger/${token}`,
      params: { ["api-version"]: cancellationToken },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
