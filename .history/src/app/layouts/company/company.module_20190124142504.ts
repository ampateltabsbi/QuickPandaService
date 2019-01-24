import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule} from './company-routing.module';
import { CompanyComponent } from './business.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
