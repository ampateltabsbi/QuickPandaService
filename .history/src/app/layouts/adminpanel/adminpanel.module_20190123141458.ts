import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpanelRoutingModule} from './adminpanel-routing.module';
import { AdminpanelComponent } from './adminpanel.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AdminpanelRoutingModule,
    SharedModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
