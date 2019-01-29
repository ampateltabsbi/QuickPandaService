import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskCategoryComponent } from './taskcategory.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskcategoryRoutingModule { }
