import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorytypeComponent } from './categorytype.component';

const routes: Routes = [
  {
      path: '',
      component: CategorytypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorytypeRoutingModule { }
