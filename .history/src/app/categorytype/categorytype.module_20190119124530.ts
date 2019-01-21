import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorytypeRoutingModule } from './categorytype-routing.module';
import { CategorytypeComponent } from './categorytype.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [CategorytypeComponent],
  imports: [
    CommonModule,
    CategorytypeRoutingModule
  ]
})
export class CategorytypeModule { }
