import type { ActivityDefinition, ConnectionDefinition, Variables, WorkflowContextOptions } from '../../../../models/models';
import type { WorkflowPersistenceBehavior } from '../../../../models/workflow-persistence-behavior.enum';

export interface Save+SaveWorkflowDefinitionRequest {
  workflowDefinitionId?: string;
  name?: string;
  displayName?: string;
  description?: string;
  tag?: string;
  channel?: string;
  variables?: string;
  contextOptions: WorkflowContextOptions;
  isSingleton: boolean;
  persistenceBehavior: WorkflowPersistenceBehavior;
  deleteCompletedInstances: boolean;
  publish: boolean;
  activities: ActivityDefinition[];
  connections: ConnectionDefinition[];
  customAttributes?: string;
}

export interface WorkflowDefinitionSummaryModel {
  id?: string;
  definitionId?: string;
  tenantId?: string;
  name?: string;
  displayName?: string;
  description?: string;
  version: number;
  isSingleton: boolean;
  persistenceBehavior: WorkflowPersistenceBehavior;
  isPublished: boolean;
  isLatest: boolean;
  customAttributes: Variables;
}
