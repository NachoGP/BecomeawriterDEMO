import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterkidsRoutingModule } from './registerkids-routing.module';
import { RegisterkidsComponent } from './registerkids.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [RegisterkidsComponent],
  imports: [
    CommonModule,
    RegisterkidsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class RegisterkidsModule { }
