import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginteensRoutingModule } from './loginteens-routing.module';
import { LoginteensComponent } from './loginteens.component';


@NgModule({
  declarations: [LoginteensComponent],
  imports: [
    CommonModule,
    LoginteensRoutingModule
  ]
})
export class LoginteensModule { }
