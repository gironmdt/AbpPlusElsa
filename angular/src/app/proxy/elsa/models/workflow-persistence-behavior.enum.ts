import { mapEnumToOptions } from '@abp/ng.core';

export enum WorkflowPersistenceBehavior {
  Suspended = 0,
  WorkflowBurst = 1,
  ActivityExecuted = 2,
}

export const workflowPersistenceBehaviorOptions = mapEnumToOptions(WorkflowPersistenceBehavior);
