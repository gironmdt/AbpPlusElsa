import type { Duration, Instant } from '../../../../../noda-time/models';

export interface ActivityEventCount {
  eventName?: string;
  count: number;
}

export interface ActivityFault {
  message?: string;
}

export interface ActivityStats {
  eventCounts: ActivityEventCount[];
  fault: ActivityFault;
  averageExecutionTime?: Duration;
  fastestExecutionTime?: Duration;
  slowestExecutionTime?: Duration;
  lastExecutedAt?: Instant;
}
