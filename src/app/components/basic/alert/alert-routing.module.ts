import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlertComponent} from './alert.component';

const routes: Routes = [
  {
    path: '',
    component: AlertComponent,
    data: {
      breadcrumb: 'Alert',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule { }
