
export interface Duration extends any {
  zero: Duration;
  epsilon: Duration;
  maxValue: Duration;
  minValue: Duration;
  days: number;
  nanosecondOfDay: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  subsecondTicks: number;
  subsecondNanoseconds: number;
  bclCompatibleTicks: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
  totalMilliseconds: number;
  totalTicks: number;
  totalNanoseconds: number;
}

export interface Instant extends any {
  minValue: Instant;
  maxValue: Instant;
}
