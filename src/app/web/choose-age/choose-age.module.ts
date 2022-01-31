import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseAgeRoutingModule } from './choose-age-routing.module';
import { ChooseAgeComponent } from './choose-age.component';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [ChooseAgeComponent],
  imports: [
    CommonModule,
    ChooseAgeRoutingModule,
    SharedModule
  ], 
  exports: [
    ChooseAgeComponent
  ]
})
export class ChooseAgeModule { }
