import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriorityComponent } from './priority.component';

const routes: Routes = [
  {
      path: '',
      component: PriorityComponent,
      data: {
        breadcrumb: 'Priority',
        status: true
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriorityRoutingModule { }
