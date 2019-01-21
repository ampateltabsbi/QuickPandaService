import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingpageComponent} from './landingpage.component';

const routes: Routes = [
  {
    path: '',
    component: LandingpageComponent,
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
export class LandingpageRoutingModule { }
