import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {adminpanelRoutingModule} from './adminpanel-routing.module';
import { CompanyComponent } from './adminpanel.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
