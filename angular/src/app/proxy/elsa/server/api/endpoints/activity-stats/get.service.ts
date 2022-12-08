import type { ActivityStats } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { ActionResult } from '../../../../../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  apiName = 'Default';
  

  handleByWorkflowInstanceIdAndActivityIdAndCancellationToken = (workflowInstanceId: string, activityId: string, cancellationToken?: any) =>
    this.restService.request<any, ActionResult<ActivityStats>>({
      method: 'GET',
      url: `/v1/workflow-instances/${workflowInstanceId}/activity-stats/${activityId}`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
