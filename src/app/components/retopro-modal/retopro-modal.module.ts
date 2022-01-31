import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetoproModalComponent } from './retopro-modal.component';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [RetoproModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RetoproModalComponent
  ],
  entryComponents: [
    RetoproModalComponent
  ]
})
export class RetoproModalModule { }
