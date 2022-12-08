import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  apiName = 'Default';
  

  handle = () =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/v1/workflow-providers',
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
