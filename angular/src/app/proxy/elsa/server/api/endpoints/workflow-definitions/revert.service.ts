import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ActionResult, ApiVersion } from '../../../../../microsoft/asp-net-core/mvc/models';
import type { WorkflowDefinition } from '../../../../models/models';

@Injectable({
  providedIn: 'root',
})
export class RevertService {
  apiName = 'Default';
  

  handleByDefinitionIdAndVersionAndApiVersionAndCancellationToken = (definitionId: string, version: number, apiVersion: ApiVersion, cancellationToken: any) =>
    this.restService.request<any, ActionResult<WorkflowDefinition>>({
      method: 'POST',
      url: `/v1/workflow-definitions/${definitionId}/revert/${version}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
