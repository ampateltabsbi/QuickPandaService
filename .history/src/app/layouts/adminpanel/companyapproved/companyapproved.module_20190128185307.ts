import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyapprovedRoutingModule } from './companyapproved-routing.module';
import { CompanyapprovedComponent } from './companyapproved.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [CompanyapprovedComponent],
  imports: [
    CommonModule,
    CompanyapprovedRoutingModule,
    SharedModule
  ]
})
export class CompanyapprovedModule { }

