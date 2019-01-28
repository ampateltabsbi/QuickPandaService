import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyrejectedRoutingModule } from './companyrejected-routing.module';
import { CompanyrejectedComponent } from './companyrejected.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [CompanyrejectedComponent],
  imports: [
    CommonModule,
    CompanyrejectedRoutingModule,
    SharedModule
  ]
})
export class CompanyrejectedModule { }
