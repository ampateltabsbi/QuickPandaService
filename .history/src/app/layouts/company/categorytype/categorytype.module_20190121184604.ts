import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorytypeRoutingModule } from './categorytype-routing.module';
import { CategorytypeComponent } from './categorytype.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [CategorytypeComponent],
  imports: [
    CommonModule,
    CategorytypeRoutingModule,
    SharedModule
  ]
})
export class CategorytypeModule { }
