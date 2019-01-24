import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessRoutingModule} from './business-routing.module';
import { BusinessComponent } from './business.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    BusinessRoutingModule,
    SharedModule
  ],
  declarations: [BusinessComponent]
})
export class BusinessModule { }
