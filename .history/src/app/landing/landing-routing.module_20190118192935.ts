import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Landing Page',
      status: false
    },
    children: [
      {
        path: 'login',
        loadChildren: './login/basic-login/basic-login.module#BasicLoginModule'
      },
      {
        path: 'registration',
        loadChildren: './registration/basic-reg/basic-reg.module#BasicRegModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
