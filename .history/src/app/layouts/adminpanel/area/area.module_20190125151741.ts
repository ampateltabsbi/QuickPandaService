import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaRoutingModule } from './area-routing.module';
import { AreaComponent } from './area.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [AreaComponent],
  imports: [
    CommonModule,
    AreaRoutingModule,
    SharedModule
  ]
})
export class AreaModule { }

