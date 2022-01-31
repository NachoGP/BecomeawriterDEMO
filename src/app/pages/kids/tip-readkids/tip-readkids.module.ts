import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipReadkidsRoutingModule } from './tip-readkids-routing.module';
import { TipReadkidsComponent } from './tip-readkids.component';


@NgModule({
  declarations: [TipReadkidsComponent],
  imports: [
    CommonModule,
    TipReadkidsRoutingModule
  ]
})
export class TipReadkidsModule { }
