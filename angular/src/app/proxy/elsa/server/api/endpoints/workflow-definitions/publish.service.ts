import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ActionResult, ApiVersion } from '../../../../../microsoft/asp-net-core/mvc/models';
import type { WorkflowDefinition } from '../../../../models/models';

@Injectable({
  providedIn: 'root',
})
export class PublishService {
  apiName = 'Default';
  

  handleByWorkflowDefinitionIdAndApiVersionAndCancellationToken = (workflowDefinitionId: string, apiVersion: ApiVersion, cancellationToken: any) =>
    this.restService.request<any, ActionResult<WorkflowDefinition>>({
      method: 'POST',
      url: `/v1/workflow-definitions/${workflowDefinitionId}/publish`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
