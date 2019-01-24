import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorityRoutingModule } from './priority-routing.module';
import { PriorityComponent } from './priority.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [PriorityComponent],
  imports: [
    CommonModule,
    PriorityRoutingModule,
    SharedModule
  ]
})
export class PriorityModule { }
