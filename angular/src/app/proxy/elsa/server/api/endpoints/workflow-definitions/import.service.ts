import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IFormFile } from '../../../../../microsoft/asp-net-core/http/models';
import type { IActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class ImportService {
  apiName = 'Default';
  

  handleByWorkflowDefinitionIdAndFileAndCancellationToken = (workflowDefinitionId: string, file: IFormFile, cancellationToken: any) =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/v1/workflow-definitions/${workflowDefinitionId}/import`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
