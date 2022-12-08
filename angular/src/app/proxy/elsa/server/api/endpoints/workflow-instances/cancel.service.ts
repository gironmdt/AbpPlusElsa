import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class CancelService {
  apiName = 'Default';
  

  handleByIdAndCancellationToken = (id: string, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/v1/workflow-instances/${id}/cancel`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
