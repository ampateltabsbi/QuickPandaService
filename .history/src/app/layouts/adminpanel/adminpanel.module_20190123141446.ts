import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpanelRoutingModule} from './adminpanel-routing.module';
import { adminpanelComponent } from './adminpanel.component';
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
