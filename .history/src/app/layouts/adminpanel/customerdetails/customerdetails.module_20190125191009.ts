import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerdetailsRoutingModule } from './customerdetails-routing.module';
import { CustomerdetailsComponentComponent } from './customerdetails.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [CustomerdetailsComponentComponent],
  imports: [
    CommonModule,
    CustomerdetailsRoutingModule,
    SharedModule
  ]
})
export class CustomerdetailsModule { }
