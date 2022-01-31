import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipskidsRoutingModule } from './tipskids-routing.module';
import { TipskidsComponent } from './tipskids.component';


@NgModule({
  declarations: [TipskidsComponent],
  imports: [
    CommonModule,
    TipskidsRoutingModule
  ]
})
export class TipskidsModule { }
