import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericModalComponent } from './generic-modal.component';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    GenericModalComponent  ],
  exports: [
    GenericModalComponent
  ],
  entryComponents: [
    GenericModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
 
  ]
})
export class GenericModalModule { }
