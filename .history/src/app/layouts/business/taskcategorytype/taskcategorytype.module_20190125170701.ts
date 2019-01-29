import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskcategorytypeComponent } from './taskcategorytype.component';
import { TaskcategorytypeRoutingModule } from './taskcategorytype-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TaskcategorytypeRoutingModule
  ]
})
export class TaskcategorytypeModule { }


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskcategoryComponent } from './taskcategory.component';
import { TaskcategoryRoutingModule } from './taskcategory-routing.module';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [TaskcategoryComponent],
  imports: [
    CommonModule,
    TaskcategoryRoutingModule,
    SharedModule
  ]
})
export class TaskcategoryModule { }

