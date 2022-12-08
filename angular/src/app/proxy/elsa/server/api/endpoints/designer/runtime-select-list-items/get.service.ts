import type { RuntimeSelectListContextHolder } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  apiName = 'Default';
  

  handleByModelAndCancellationToken = (model: RuntimeSelectListContextHolder, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: '/v1/designer/runtime-select-list',
      body: model,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
