import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Admin',
      status: false
    },
    children: [
      {
        path: 'category',
        loadChildren: './'
      },
      {
        path: 'categorytype',
        loadChildren: './categorytype/categorytype.module#CategorytypeModule'
      },
      {
        path: 'categorydescription',
        loadChildren: './categorydescription/categorydescription.module#CategorydescriptionModule'
      },
      {
        path: 'city',
        loadChildren: './city/city.module#CityModule'
      },
      {
        path: 'state',
        loadChildren: './state/state.module#StateModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#CountryModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpanelRoutingModule { }
