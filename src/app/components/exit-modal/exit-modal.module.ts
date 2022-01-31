import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExitModalComponent } from './exit-modal.component';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [
    ExitModalComponent  ],
  exports: [
    ExitModalComponent
  ],
  entryComponents: [
    ExitModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ExitModalModule { }
