import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorytypeComponent } from './categor.component';

const routes: Routes = [
  {
      path: '',
      component: CategorytypeComponent,
      data: {
        breadcrumb: 'Category Type',
        status: true
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorytypeRoutingModule { }
