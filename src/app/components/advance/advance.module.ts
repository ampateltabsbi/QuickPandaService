import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvanceRoutingModule } from './advance-routing.module';
import { AdvanceComponent } from './advance.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdvanceRoutingModule,
    SharedModule
  ],
  declarations: [AdvanceComponent]
})
export class AdvanceModule { }
