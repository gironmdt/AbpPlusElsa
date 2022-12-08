import type { WorkflowBlueprintModel } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';
import type { VersionOptions } from '../../../../models/models';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  apiName = 'Default';
  

  handleByIdAndVersionOptionsAndCancellationToken = (id: string, versionOptions?: VersionOptions, cancellationToken?: any) =>
    this.restService.request<any, ActionResult<WorkflowBlueprintModel>>({
      method: 'GET',
      url: `/v1/workflow-registry/${id}/${versionOptions}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
