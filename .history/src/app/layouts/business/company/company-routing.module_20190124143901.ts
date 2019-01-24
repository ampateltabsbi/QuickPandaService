// import { NgModule } from '@angular/core';
// import {RouterModule, Routes} from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     data: {
//       breadcrumb: 'Business',
//       status: false
//     },
//     children: [
//       {
//         path: 'status',
//         loadChildren: './status/status.module#StatusModule'
//       },
//       {
//         path: 'priority',
//         loadChildren: './priority/priority.module#PriorityModule'
//       }
//       // {
//       //   path: 'categorydescription',
//       //   loadChildren: './categorydescription/categorydescription.module#CategorydescriptionModule'
//       // },
//       // {
//       //   path: 'city',
//       //   loadChildren: './city/city.module#CityModule'
//       // },
//       // {
//       //   path: 'state',
//       //   loadChildren: './state/state.module#StateModule'
//       // },
//       // {
//       //   path: 'country',
//       //   loadChildren: './country/country.module#CountryModule'
//       // }
//     ]
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class CompanyRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company.component';

const routes: Routes = [
  {
      path: '',
      component: CompanyComponent,
      data: {
        breadcrumb: 'Company',
        status: true
      }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

