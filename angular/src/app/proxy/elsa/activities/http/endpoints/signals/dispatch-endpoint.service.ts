import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class DispatchEndpointService {
  apiName = 'Default';
  

  handleByToken = (token: string, apiVersion: string = "1.0") =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/signals/dispatch/${token}`,
      params: { ["api-version"]: apiVersion },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
