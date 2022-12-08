import type { WorkflowContextFidelity } from './workflow-context-fidelity.enum';
import type { WorkflowPersistenceBehavior } from './workflow-persistence-behavior.enum';
import type { Instant } from '../../noda-time/models';

export interface ActivityDefinition {
  activityId?: string;
  type?: string;
  name?: string;
  displayName?: string;
  description?: string;
  persistWorkflow: boolean;
  loadWorkflowContext: boolean;
  saveWorkflowContext: boolean;
  properties: ActivityDefinitionProperty[];
  propertyStorageProviders: Record<string, string>;
}

export interface ActivityDefinitionProperty {
  name?: string;
  syntax?: string;
  expressions: Record<string, string>;
}

export interface ConnectionDefinition {
  sourceActivityId?: string;
  targetActivityId?: string;
  outcome?: string;
}

export interface Variables {
  data: Record<string, object>;
}

export interface WorkflowContextOptions {
  contextType: any;
  contextFidelity: WorkflowContextFidelity;
}

export interface WorkflowInput {
  input: object;
  storageProviderName?: string;
}

export interface Entity {
  id?: string;
}

export interface VersionOptions extends any {
  isLatest: boolean;
  isLatestOrPublished: boolean;
  isPublished: boolean;
  isDraft: boolean;
  allVersions: boolean;
  version: number;
}

export interface WorkflowDefinition extends Entity {
  definitionId?: string;
  versionId?: string;
  tenantId?: string;
  name?: string;
  displayName?: string;
  description?: string;
  channel?: string;
  version: number;
  variables: Variables;
  customAttributes: Variables;
  contextOptions: WorkflowContextOptions;
  isSingleton: boolean;
  persistenceBehavior: WorkflowPersistenceBehavior;
  deleteCompletedInstances: boolean;
  isPublished: boolean;
  isLatest: boolean;
  tag?: string;
  createdAt: Instant;
  activities: ActivityDefinition[];
  connections: ConnectionDefinition[];
}
