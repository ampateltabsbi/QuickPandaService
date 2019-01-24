
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CompanyregisterComponent } from './companyregister.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyregisterComponent,
    data: {
      title: 'Company-Register'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CompanyregisterRoutingModule { }
