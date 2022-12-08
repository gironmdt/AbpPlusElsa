import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';
import type { VersionOptions } from '../../../../models/models';

@Injectable({
  providedIn: 'root',
})
export class ListAllService {
  apiName = 'Default';
  

  handleByVersionAndCancellationToken = (version?: VersionOptions, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/v1/workflow-registry',
      params: { version },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
