import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskcategorydescriptionComponent } from './taskcategorydescription.component';

const routes: Routes = [
  {
      path: '',
      component: TaskcategorydescriptionComponent,
      data: {
        breadcrumb: 'Task Category Description',
        status: true
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskcategorydescriptionRoutingModule { }
