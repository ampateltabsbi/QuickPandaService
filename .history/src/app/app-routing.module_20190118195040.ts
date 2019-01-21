
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './layouts/auth/auth.component';
import { LandingComponent } from './layouts/landing/landing.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }, {
        path: 'widget',
        loadChildren: './widget/widget.module#WidgetModule'
      }, {
        path: 'basic',
        loadChildren: './components/basic/basic.module#BasicModule'
      }, {
        path: 'advance',
        loadChildren: './components/advance/advance.module#AdvanceModule'
      }, {
        path: 'forms',
        loadChildren: './components/forms/forms.module#FormsModule'
      }, {
        path: 'bootstrap-table',
        loadChildren: './components/tables/bootstrap-table/bootstrap-table.module#BootstrapTableModule',
      }, {
        path: 'charts',
        loadChildren: './charts/charts.module#ChartsModule',
      }, {
        path: 'simple-page',
        loadChildren: './simple-page/simple-page.module#SimplePageModule'
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: 'landing',
        loadChildren: './landing/auth.module#AuthModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
