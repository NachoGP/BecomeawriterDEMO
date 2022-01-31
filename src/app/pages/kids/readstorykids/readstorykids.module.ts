import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadstorykidsRoutingModule } from './readstorykids-routing.module';
import { ReadstorykidsComponent } from './readstorykids.component';


@NgModule({
  declarations: [ReadstorykidsComponent],
  imports: [
    CommonModule,
    ReadstorykidsRoutingModule
  ]
})
export class ReadstorykidsModule { }
