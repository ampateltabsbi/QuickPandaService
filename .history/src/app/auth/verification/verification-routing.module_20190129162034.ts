
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { VerificationComponent } from './verification.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent,
    data: {
      title: 'Company-Register'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class VerificationRoutingModule { }
