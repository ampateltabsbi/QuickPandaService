
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { FileSelectDirective  } from 'ng2-file-size';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule,
    Ng2FileSizeModule
  ],
  declarations: [CompanyComponent]
})
export class CompanyModule { }
