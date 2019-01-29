import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskcategorytypeComponent } from './taskcategorytype.component';
import { TaskcategorytypeRoutingModule } from './taskcategorytype-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [TaskcategorytypeComponent],
  imports: [
    CommonModule,
    TaskcategorytypeRoutingModule
  ]
})
export class TaskcategorytypeModule { }

