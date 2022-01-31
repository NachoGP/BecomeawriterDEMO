import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalcontactRoutingModule } from './modalcontact-routing.module';
import { ModalcontactComponent } from './modalcontact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ModalcontactComponent],
  imports: [
    CommonModule,
    ModalcontactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ModalcontactModule { }
