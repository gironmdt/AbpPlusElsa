import type { WorkflowInput } from '../../../../models/models';

export interface BulkCancelWorkflowsRequest {
  workflowInstanceIds: string[];
}

export interface BulkDeleteWorkflowsRequest {
  workflowInstanceIds: string[];
}

export interface BulkRetryWorkflowsRequest {
  workflowInstanceIds: string[];
}

export interface DispatchWorkflowInstanceRequestModel {
  activityId?: string;
  input: WorkflowInput;
}

export interface RetryWorkflowRequest {
  runImmediately: boolean;
}
