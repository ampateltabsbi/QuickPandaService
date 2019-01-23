import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CityRoutingModule
  ]
})
export class CityModule { }
