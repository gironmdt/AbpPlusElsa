import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproveRoutingModule } from './approve-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ApproveComponent } from './approve.component';


@NgModule({
  declarations: [
    ApproveComponent
  ],
  imports: [
    CommonModule,
    ApproveRoutingModule,
    SharedModule
  ]
})
export class ApproveModule { }
