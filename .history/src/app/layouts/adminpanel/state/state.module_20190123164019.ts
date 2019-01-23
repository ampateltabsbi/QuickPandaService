import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StateRoutingModule
  ]
})
export class StateModule { }
