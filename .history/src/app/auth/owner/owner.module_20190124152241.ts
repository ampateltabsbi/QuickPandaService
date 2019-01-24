
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './owner.component';
import { OwnerRoutingModule } from './owner-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ],
  declarations: [BasicLoginComponent]
})
export class OwnerModule { }
