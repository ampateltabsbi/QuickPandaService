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
      },
      {
        path: 'taskcategory',
        loadChildren: './taskcategory/taskcategory.module#TaskcategoryModule'
      },
      {
        path: 'taskcategorytype',
        loadChildren: './taskcategorytype/taskcategorytype.module#TaskcategorytypeModule'
      },
      {
        path: 'taskcategorydescription',
        loadChildren: './taskcategorydescription/taskcategorydescription.module#TaskcategorydescriptionModule'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
