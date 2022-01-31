import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllstorieskidsComponent } from './allstorieskids.component';
/** Routing */
import { AllstorieskidsRoutingModule } from './allstorieskids-routing.module';

@NgModule({
  declarations: [AllstorieskidsComponent],
  imports: [
    CommonModule,
    AllstorieskidsRoutingModule,
  ]
})
export class AllstorieskidsModule { }
