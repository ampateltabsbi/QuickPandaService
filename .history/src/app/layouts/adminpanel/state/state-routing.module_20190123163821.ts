import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StateComponent} from './state.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
