import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './landingpage.component';
import {LandingpageRoutingModule} from './landingpage-routing.module';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    LandingpageRoutingModule,
    SharedModule
  ],
  declarations: [LandingpageComponent]
})
export class LandingpageModule { }
