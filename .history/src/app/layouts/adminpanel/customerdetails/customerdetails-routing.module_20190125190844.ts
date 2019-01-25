import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerdetailsComponent } from './customerdetails.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerdetailsComponent,
    data: {
      breadcrumb: 'City',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerdetailsRoutingModule { }
