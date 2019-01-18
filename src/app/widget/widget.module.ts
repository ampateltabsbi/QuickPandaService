import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WidgetRoutingModule } from './widget-routing.module';
import { WidgetComponent } from './widget.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    WidgetRoutingModule,
    SharedModule
  ],
  declarations: [WidgetComponent]
})
export class WidgetModule { }
