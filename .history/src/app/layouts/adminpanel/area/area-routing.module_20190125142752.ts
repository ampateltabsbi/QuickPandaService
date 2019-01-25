import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area.component';

const routes: Routes = [
  {
    path: '',
    component: AreaComponent,
    data: {
      breadcrumb: 'Area',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule { }

/////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CityComponent} from './city.component';

const routes: Routes = [
  {
    path: '',
    component: CityComponent,
    data: {
      breadcrumb: 'City',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }

