import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategorydescriptionComponent} from './categorydescription.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    data: {
      breadcrumb: 'Category',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorydescriptionRoutingModule { }