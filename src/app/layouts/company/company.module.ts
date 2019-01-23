import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule} from './company-routing.module';
import { CompanyComponent } from './company.component';
import { SharedModule } from '../../shared/shared.module';
import { StatusComponent } from './status/status.component';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ],
  declarations: [CompanyComponent, StatusComponent]
})
export class CompanyModule { }
