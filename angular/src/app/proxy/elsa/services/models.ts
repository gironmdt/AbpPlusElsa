import type { WorkflowInput } from '../models/models';

export interface IBookmark {
}

export interface ExecuteWorkflowInstanceRequest {
  workflowInstanceId?: string;
  activityId?: string;
  input: WorkflowInput;
}
