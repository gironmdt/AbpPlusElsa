import { mapEnumToOptions } from '@abp/ng.core';

export enum WorkflowContextFidelity {
  Burst = 0,
  Activity = 1,
}

export const workflowContextFidelityOptions = mapEnumToOptions(WorkflowContextFidelity);
