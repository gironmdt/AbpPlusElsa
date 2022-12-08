import { mapEnumToOptions } from '@abp/ng.core';

export enum OrderBy {
  Started = 0,
  LastExecuted = 1,
  Finished = 2,
}

export const orderByOptions = mapEnumToOptions(OrderBy);
