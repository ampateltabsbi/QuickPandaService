import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskcategoryComponent } from './taskcategory.component';

const routes: Routes = [
  {
      path: '',
      component: TaskcategoryComponent,
      data: {
        breadcrumb: 'Task Category',
        status: true
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskcategoryRoutingModule { }
