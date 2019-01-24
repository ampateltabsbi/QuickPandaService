import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    data: {
      title: 'Owner-Register'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CompanyRoutingModule { }
