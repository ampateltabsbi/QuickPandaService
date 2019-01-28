import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyrejectedComponent } from './companyrejected.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyrejectedComponent,
    data: {
      breadcrumb: 'Rejected Company',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyrejectedRoutingModule { }
