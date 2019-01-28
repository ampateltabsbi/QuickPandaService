import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanypendingRoutingModule } from './companypending-routing.module';
import { CompanypendingComponent } from './companypending.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [CompanypendingComponent],
  imports: [
    CommonModule,
    CompanypendingRoutingModule,
    SharedModule
  ]
})
export class CompanypendingModule { }
