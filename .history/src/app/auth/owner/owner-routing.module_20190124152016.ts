import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OwnerComponent } from './owner.component';

const routes: Routes = [
  {
    path: '',
    component: OwnerComponent,
    data: {
      title: 'Owner'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
