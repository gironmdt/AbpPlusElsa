import { mapEnumToOptions } from '@abp/ng.core';

export enum WorkflowStatus {
  Idle = 0,
  Running = 1,
  Finished = 2,
  Suspended = 3,
  Faulted = 4,
  Cancelled = 5,
}

export const workflowStatusOptions = mapEnumToOptions(WorkflowStatus);
