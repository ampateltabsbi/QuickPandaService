import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import { Ng2FileSizeModule } from 'ng2-file-size';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    Ng2FileSizeModule
  ],
  declarations: []
})
export class AuthModule { }
