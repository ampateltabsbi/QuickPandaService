import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminpanelRoutingModule} from './adminpanel-routing.module';
import { AdminpanelComponent } from './adminpanel.component';
import {SharedModule} from '../../shared/shared.module';
import { AreaComponent } from './area/area.component';

@NgModule({
  imports: [
    CommonModule,
    AdminpanelRoutingModule,
    SharedModule
  ],
  declarations: [AdminpanelComponent, AreaComponent]
})
export class AdminpanelModule { }
