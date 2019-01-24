// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { CompanyRoutingModule} from './company-routing.module';
// import { CompanyComponent } from './company.component';
// import { SharedModule } from '../../shared/shared.module';

// @NgModule({
//   imports: [
//     CommonModule,
//     CompanyRoutingModule,
//     SharedModule
//   ],
//   declarations: [CompanyComponent]
// })
// export class CompanyModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  declarations: [CompanyComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    SharedModule
  ]
})
export class CompanyModule { }
