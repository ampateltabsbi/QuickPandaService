import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorydescriptionRoutingModule } from './categorydescription-routing.module';
import { CategorydescriptionComponent } from './categorydescription.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategorydescriptionRoutingModule
  ]
})
export class CategorydescriptionModule { }


//////




import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import { CategoryComponent } from './category.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
