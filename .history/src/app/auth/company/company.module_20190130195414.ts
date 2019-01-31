
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,ReactiveFormsModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
