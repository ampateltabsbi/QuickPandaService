
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    Ng2FileSizeModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
