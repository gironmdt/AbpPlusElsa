import type { IBookmark } from '../../../../services/models';

export interface DispatchWorkflowDefinitionRequestModel {
  activityId?: string;
  correlationId?: string;
  contextId?: string;
  input: object;
}

export interface ExecuteWorkflowDefinitionRequestModel {
  activityId?: string;
  correlationId?: string;
  contextId?: string;
  input: object;
}

export interface TriggerWorkflowsRequestModel {
  activityType?: string;
  bookmark: IBookmark;
  correlationId?: string;
  workflowInstanceId?: string;
  contextId?: string;
  input: object;
  dispatch: boolean;
}
