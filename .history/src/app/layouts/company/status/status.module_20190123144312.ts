import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [StatusComponent],
  imports: [
    CommonModule,
    StatusRoutingModule,
    SharedModule
  ]
})
export class StatusModule { }
