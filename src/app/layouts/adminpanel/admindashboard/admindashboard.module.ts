import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmindashboardRoutingModule } from './admindashboard-routing.module';
import { AdmindashboardComponent } from './admindashboard.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdmindashboardRoutingModule,
    SharedModule
  ],
  declarations: [AdmindashboardComponent]
})
export class AdmindashboardModule { }
