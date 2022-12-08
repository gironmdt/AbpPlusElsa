import type { AuditedEntityDto } from '@abp/ng.core';

export interface ApprovalDto extends AuditedEntityDto<string> {
  name?: string;
  email?: string;
  body?: string;
}

export interface CreateUpdateApprovalDto {
  name: string;
  email: string;
  body: string;
}
