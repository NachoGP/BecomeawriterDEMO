import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { LoginComponent } from '../login/login.component';
import { LoginkidsComponent } from '../loginkids/loginkids.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroRoutingModule,
  ]
})
export class HeroModule { }
