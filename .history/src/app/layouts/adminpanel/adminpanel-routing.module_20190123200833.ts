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
        loadChildren: './category/category.module#CategoryModule'
      }, {
        path: 'categorytype',
        loadChildren: './categorytype/categorytype.module#CategorytypeModule'
      }, {
        path: 'categorydescription',
        loadChildren: './categorydescription/categorydescription.module#CategorydescriptionModule'
      }, {
        path: 'country',
        loadChildren: './country/country.module#CountryModule'
      }, {
        path: 'state',
        loadChildren: './state/state.module#StateModule'
      }, {
        path: 'city',
        loadChildren: './city/city.module#CityModule'
      }, {
        path: 'pendingcompany',
        loadChildren: './companypending/companypending.module#CompanypendingModule'
      }, {
        path: 'approvedcompany',
        loadChildren: './companyapproved/companyapproved.module#CompanyapprovedModule'
      }, {
        path: 'rejectedcompany',
        loadChildren: './companyrejected/companyrejected.module#CompanyrejectedModule'
      }, {
        path: 'customerdetails',
        loadChildren: './customerdetails/customerdetails.module#CustomerdetailsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminpanelRoutingModule { }
