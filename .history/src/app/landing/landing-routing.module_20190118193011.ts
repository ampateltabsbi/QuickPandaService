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
        path: 'landingpae',
        loadChildren: './login/basic-login/basic-login.module#BasicLoginModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
