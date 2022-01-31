import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditstorieskidsRoutingModule } from './editstorieskids-routing.module';
import { EditstorieskidsComponent } from './editstorieskids.component';


@NgModule({
  declarations: [EditstorieskidsComponent],
  imports: [
    CommonModule,
    EditstorieskidsRoutingModule
  ]
})
export class EditstorieskidsModule { }
