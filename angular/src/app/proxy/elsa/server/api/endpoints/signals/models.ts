
export interface DispatchSignalRequest {
  workflowInstanceId?: string;
  correlationId?: string;
  input: object;
}

export interface ExecuteSignalRequest {
  workflowInstanceId?: string;
  correlationId?: string;
  input: object;
}
