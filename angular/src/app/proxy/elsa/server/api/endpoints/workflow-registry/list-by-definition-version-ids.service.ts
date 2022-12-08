import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class ListByDefinitionVersionIdsService {
  apiName = 'Default';
  

  handleByIdsAndCancellationToken = (ids: string, cancellationToken?: any) =>
    this.restService.request<any, ActionResult>({
      method: 'GET',
      url: '/v1/workflow-registry/by-definition-version-ids',
      params: { ids },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
