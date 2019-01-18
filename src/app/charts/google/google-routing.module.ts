import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GoogleComponent} from './google.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleComponent,
    data: {
      breadcrumb: 'Google Chart',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoogleRoutingModule { }
