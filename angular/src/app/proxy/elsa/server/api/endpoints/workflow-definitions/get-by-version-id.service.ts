import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class GetByVersionIdService {
  apiName = 'Default';
  

  handleByVersionIdAndCancellationToken = (versionId: string, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: `/v1/workflow-definitions/${versionId}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
