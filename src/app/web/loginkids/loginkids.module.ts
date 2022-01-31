import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginkidsRoutingModule } from './loginkids-routing.module';
import { LoginkidsComponent } from './loginkids.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [LoginkidsComponent],
  imports: [
    CommonModule,
    LoginkidsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    LoginkidsComponent
  ]
})
export class LoginkidsModule { }
