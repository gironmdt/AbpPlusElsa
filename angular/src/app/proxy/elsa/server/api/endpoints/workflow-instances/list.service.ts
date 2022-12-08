import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';
import type { OrderBy } from '../../models/order-by.enum';
import type { WorkflowStatus } from '../../../../models/workflow-status.enum';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  apiName = 'Default';
  

  handleByWorkflowDefinitionIdAndWorkflowStatusAndCorrelationIdAndOrderByAndSearchTermAndPageAndPageSizeAndCancellationToken = (workflowDefinitionId?: string, workflowStatus?: WorkflowStatus, correlationId?: string, orderBy?: OrderBy, searchTerm?: string, page?: number, pageSize: number = 25, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'GET',
      url: '/v1/workflow-instances',
      params: { workflow, status, correlationId, orderBy, searchTerm, page, pageSize },
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
