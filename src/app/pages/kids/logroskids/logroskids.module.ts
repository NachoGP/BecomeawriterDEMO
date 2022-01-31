import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogroskidsRoutingModule } from './logroskids-routing.module';
import { LogroskidsComponent } from './logroskids.component';


@NgModule({
  declarations: [LogroskidsComponent],
  imports: [
    CommonModule,
    LogroskidsRoutingModule
  ]
})
export class LogroskidsModule { }
