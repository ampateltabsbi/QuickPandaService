import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Company1',
      status: false
    },
    children: [
      {
        path: 'category',
        loadChildren: './category/category.module#CategoryModule'
      },
      {
        path: 'categorytype',
        loadChildren: './categorytype/categorytype.module#CategorytypeModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
