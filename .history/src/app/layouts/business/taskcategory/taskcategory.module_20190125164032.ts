import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskcategoryComponent } from './taskcategory.component';
import { TaskcategoryRoutingModule } from './taskcategory-routing.module';

@NgModule({
  declarations: [TaskcategoryComponent],
  imports: [
    CommonModule,
    TaskcategoryRoutingModule
  ]
})
export class TaskcategoryModule { }
