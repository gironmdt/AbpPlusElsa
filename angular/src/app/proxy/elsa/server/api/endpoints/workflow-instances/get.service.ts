import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  apiName = 'Default';
  

  handleByIdAndCancellationToken = (id: string, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/v1/workflow-instances/${id}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
