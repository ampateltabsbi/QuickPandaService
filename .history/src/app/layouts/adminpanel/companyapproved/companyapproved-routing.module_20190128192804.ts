import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyapprovedComponent } from './companyapproved.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyapprovedComponent,
    data: {
      breadcrumb: 'Company',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyapprovedRoutingModule { }
