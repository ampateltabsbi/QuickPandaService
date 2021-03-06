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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyregisterRoutingModule { }
