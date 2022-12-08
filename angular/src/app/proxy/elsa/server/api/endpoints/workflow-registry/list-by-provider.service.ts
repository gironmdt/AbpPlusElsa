import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';
import type { VersionOptions } from '../../../../models/models';

@Injectable({
  providedIn: 'root',
})
export class ListByProviderService {
  apiName = 'Default';
  

  handleByProviderNameAndPageAndPageSizeAndVersionAndCancellationToken = (providerName: string, page?: number, pageSize?: number, version?: VersionOptions, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/v1/workflow-registry/by-provider/${providerName}`,
      params: { page, pageSize, version },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
