import type { WorkflowDefinitionSummaryModel } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';
import type { VersionOptions } from '../../../../models/models';
import type { PagedList } from '../../models/models';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  apiName = 'Default';
  

  handleByIdsAndSearchTermAndPageAndPageSizeAndVersionAndCancellationToken = (ids: string, searchTerm?: string, page?: number, pageSize?: number, version?: VersionOptions, cancellationToken?: any) =>
    this.restService.request<any, ActionResult<PagedList<WorkflowDefinitionSummaryModel>>>({
      method: 'GET',
      url: '/v1/workflow-definitions',
      params: { ids, searchTerm, page, pageSize, version },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
