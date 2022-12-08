import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';
import type { VersionOptions } from '../../../../models/models';

@Injectable({
  providedIn: 'root',
})
export class DeleteService {
  apiName = 'Default';
  

  handleByDefinitionIdAndVersionOptionsAndCancellationToken = (definitionId: string, versionOptions?: VersionOptions, cancellationToken?: any) =>
    this.restService.request<any, IActionResult>({
      method: 'DELETE',
      url: `/v1/workflow-definitions/${definitionId}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
