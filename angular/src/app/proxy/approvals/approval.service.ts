import type { ApprovalDto, CreateUpdateApprovalDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedAndSortedResultRequestDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApprovalService {
  apiName = 'Default';


  create = (input: CreateUpdateApprovalDto, apiVersion: string = "1.0") =>
    this.restService.request<any, ApprovalDto>({
      method: 'POST',
      url: '/api/app/approval',
      params: { ["api-version"]: apiVersion },
      body: input,
    },
    { apiName: this.apiName });


    approveActivity = (input: CreateUpdateApprovalDto, apiVersion: string = "1.0") =>
    this.restService.request<any, ApprovalDto>({
      method: 'POST',
      url: '/v1/documents',
      params: { ["api-version"]: apiVersion },
      body: input,
      responseType:'text'
    },
    { apiName: this.apiName });




    GetSchemaActivity = (apiVersion: string = "1.0") =>
    this.restService.request<any, any>({
      method: 'GET',
      url: `/v1/schemaJson`,
      params: { ["api-version"]: apiVersion },
    },
    { apiName: this.apiName });

  delete = (id: string, apiVersion: string = "1.0") =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/approval/${id}`,
      params: { ["api-version"]: apiVersion },
    },
    { apiName: this.apiName });


  get = (id: string, apiVersion: string = "1.0") =>
    this.restService.request<any, ApprovalDto>({
      method: 'GET',
      url: `/api/app/approval/${id}`,
      params: { ["api-version"]: apiVersion },
    },
    { apiName: this.apiName });


  getList = (input: PagedAndSortedResultRequestDto, apiVersion: string = "1.0") =>
    this.restService.request<any, PagedResultDto<ApprovalDto>>({
      method: 'GET',
      url: '/api/app/approval',
      params: { skipCount: input.skipCount, maxResultCount: input.maxResultCount, sorting: input.sorting, ["api-version"]: input },
    },
    { apiName: this.apiName });


  update = (id: string, input: CreateUpdateApprovalDto, apiVersion: string = "1.0") =>
    this.restService.request<any, ApprovalDto>({
      method: 'PUT',
      url: `/api/app/approval/${id}`,
      params: { ["api-version"]: apiVersion },
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
