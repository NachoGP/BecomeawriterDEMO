import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EndModalComponent } from './end-modal.component';
import { SharedModule } from 'src/app/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [EndModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [
    EndModalComponent
  ],
  entryComponents:[
    EndModalComponent
  ]
})
export class EndModalModule { }
