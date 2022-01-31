import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllstoriesRoutingModule } from './allstories-routing.module';
import { AllstoriesComponent } from './allstories.component';


@NgModule({
  declarations: [AllstoriesComponent],
  imports: [
    CommonModule,
    AllstoriesRoutingModule
  ]
})
export class AllstoriesModule { }
