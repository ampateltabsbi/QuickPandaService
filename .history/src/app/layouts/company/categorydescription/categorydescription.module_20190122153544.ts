import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorydescriptionRoutingModule } from './categorydescription-routing.module';
import { CategorydescriptionComponent } from './categorydescription.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [CategorydescriptionComponent],
  imports: [
    CommonModule,
    CategorydescriptionRoutingModule,
    SharedModule
  ]
})
export class CategorydescriptionModule { }