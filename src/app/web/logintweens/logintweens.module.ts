import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogintweensRoutingModule } from './logintweens-routing.module';
import { LogintweensComponent } from './logintweens.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [LogintweensComponent],
  imports: [
    CommonModule,
    SharedModule,
    LogintweensRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LogintweensComponent
  ]
})
export class LogintweensModule { }
