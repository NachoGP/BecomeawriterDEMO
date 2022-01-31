import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    ConfirmationModalComponent  ],
  exports: [
    ConfirmationModalComponent
  ],
  entryComponents: [
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ConfirmationModalModule { }
