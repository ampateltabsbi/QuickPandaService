import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanypendingComponent } from './companypending.component';

const routes: Routes = [
  {
    path: '',
    component: CompanypendingComponent,
    data: {
      breadcrumb: 'Pending Company',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanypendingRoutingModule { }
