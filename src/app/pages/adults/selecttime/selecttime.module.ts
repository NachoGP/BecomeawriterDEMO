import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelecttimeRoutingModule } from './selecttime-routing.module';
import { SelecttimeComponent } from './selecttime.component';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [SelecttimeComponent],
  imports: [
    CommonModule,
    SelecttimeRoutingModule,
    SharedModule
  ]
})
export class SelecttimeModule { }
