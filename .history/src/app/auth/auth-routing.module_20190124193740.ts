
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Authentication',
      status: false
    },
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: './login/basic-login/basic-login.module#BasicLoginModule'
      },
      {
        path: 'registration',
        loadChildren: './registration/basic-reg/basic-reg.module#BasicRegModule'
      },
      {
        path: 'owner-register',
        loadChildren: './owner/owner.module#OwnerModule'
      },
      {
        path: 'verification',
        loadChildren: './verification/verification.module#VerificationModule'
      },
      {
        path: 'company-register',
        loadChildren: './company/company.module#CompanyModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
