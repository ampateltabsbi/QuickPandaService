import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorytypeRoutingModule } from './categorytype-routing.module';
import { CategorytypeComponent } from './categorytype.component';

@NgModule({
  declarations: [CategorytypeComponent],
  imports: [
    CommonModule,
    CategorytypeRoutingModule
  ]
})
export class CategorytypeModule { }
