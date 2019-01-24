


import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OwnerComponent } from './owner.component';



const routes: Routes = [
  {
    path: '',
    component: OwnerComponent,
    data: {
      title: 'Simple Login'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OwnerRoutingModule { }
