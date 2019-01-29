import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskcategorydescriptionComponent } from './taskcategorydescription.component';
import { TaskcategorydescriptionRoutingModule } from './taskcategorydescription-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [TaskcategorydescriptionComponent],
  imports: [
    CommonModule,
    TaskcategorydescriptionRoutingModule,
    SharedModule
  ]
})
export class TaskcategorydescriptionModule { }
