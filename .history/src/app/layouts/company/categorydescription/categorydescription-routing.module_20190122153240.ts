import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategorydescriptionComponent} from './categorydescription.component';

const routes: Routes = [
  {
    path: '',
    component: CategorydescriptionComponent,
    data: {
      breadcrumb: 'Category Description',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorydescriptionRoutingModule { }