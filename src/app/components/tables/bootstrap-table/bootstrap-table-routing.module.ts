import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Bootstrap Tables',
      status: false
    },
    children: [
      {
        path: 'basic-bootstrap',
        loadChildren: './basic-bootstrap/basic-bootstrap.module#BasicBootstrapModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BootstrapTableRoutingModule { }
