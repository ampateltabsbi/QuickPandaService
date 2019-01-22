import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Company',
      status: false
    },
    children: [
      {
        path: 'category',
        loadChildren: './company/category/category.module#CategoryModule'
      },
      {
        path: 'country',
        loadChildren: './registration/basic-reg/basic-reg.module#BasicRegModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
