import type { Variables, WorkflowContextOptions } from '../../../../models/models';
import type { WorkflowPersistenceBehavior } from '../../../../models/workflow-persistence-behavior.enum';

export interface ActivityBlueprintModel {
  id?: string;
  name?: string;
  displayName?: string;
  description?: string;
  type?: string;
  parentId?: string;
  persistWorkflow: boolean;
  loadWorkflowContext: boolean;
  saveWorkflowContext: boolean;
  inputProperties: Variables;
  outputProperties: Variables;
}

export interface CompositeActivityBlueprintModel extends ActivityBlueprintModel {
  activities: ActivityBlueprintModel[];
  connections: ConnectionModel[];
}

export interface ConnectionModel {
  sourceActivityId?: string;
  targetActivityId?: string;
  outcome?: string;
}

export interface WorkflowBlueprintModel extends CompositeActivityBlueprintModel {
  version: number;
  tenantId?: string;
  isSingleton: boolean;
  isEnabled: boolean;
  isPublished: boolean;
  isLatest: boolean;
  isDisabled: boolean;
  variables: Variables;
  contextOptions: WorkflowContextOptions;
  persistenceBehavior: WorkflowPersistenceBehavior;
  deleteCompletedInstances: boolean;
  customAttributes: Variables;
}
