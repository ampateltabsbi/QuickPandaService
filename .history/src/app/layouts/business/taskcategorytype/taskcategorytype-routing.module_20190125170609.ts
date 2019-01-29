import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskcategorytypeComponent } from './taskcategorytype.component';

const routes: Routes = [
  {
      path: '',
      component: TaskcategorytypeComponent,
      data: {
        breadcrumb: 'Task Category Type',
        status: true
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskcategorytypeRoutingModule { }
