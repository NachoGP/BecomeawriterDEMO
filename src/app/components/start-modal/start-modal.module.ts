import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartModalComponent } from './start-modal.component';
import { SharedModule } from 'src/app/shared.module';



@NgModule({
  declarations: [StartModalComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    StartModalComponent
  ],
  entryComponents: [
    StartModalComponent
  ]
})
export class StartModalModule { }
