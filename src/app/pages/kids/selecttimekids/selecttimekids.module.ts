import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SelecttimekidsRoutingModule } from './selecttimekids-routing.module';
import { SelecttimekidsComponent } from './selecttimekids.component';


@NgModule({
  declarations: [SelecttimekidsComponent],
  imports: [
    CommonModule,
    SelecttimekidsRoutingModule
  ]
})
export class SelecttimekidsModule { }
