import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleRoutingModule } from './google-routing.module';
import { GoogleComponent } from './google.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GoogleRoutingModule,
    SharedModule
  ],
  declarations: [GoogleComponent]
})
export class GoogleModule { }
