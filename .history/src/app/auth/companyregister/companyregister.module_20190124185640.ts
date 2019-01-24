
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyregisterComponent } from './companyregister.component';
import { CompanyregisterRoutingModule } from './companyregister-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ],
  declarations: [OwnerComponent]
})
export class CompanyregisterModule { }
