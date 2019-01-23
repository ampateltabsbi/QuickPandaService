import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatusComponent } from './status.component';

const routes: Routes = [
  {
      path: '',
      component: StatusComponent,
      data: {
        breadcrumb: 'Status',
        status: true
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }