import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Business',
      status: false
    },
    children: [
      {
        path: 'status',
        loadChildren: './status/status.module#StatusModule'
      },
      {
        path: 'priority',
        loadChildren: './priority/priority.module#PriorityModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
