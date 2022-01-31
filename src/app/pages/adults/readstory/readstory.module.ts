import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReadstoryRoutingModule } from './readstory-routing.module';
import { ReadstoryComponent } from './readstory.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [ReadstoryComponent],
  imports: [
    CommonModule,
    ReadstoryRoutingModule,
    SharedModule
  ]
})
export class ReadstoryModule { }
