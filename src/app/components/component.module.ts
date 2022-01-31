import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StartModalModule } from './start-modal/start-modal.module';
import { ConfirmationModalModule } from './confirmation-modal/confirmation-modal.module';
import { EndModalModule } from './end-modal/end-modal.module';
import { RetoproModalModule } from './retopro-modal/retopro-modal.module';
import { ExitModalModule } from './exit-modal/exit-modal.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    StartModalModule,
    ConfirmationModalModule,
    EndModalModule,
    ExitModalModule,
    RetoproModalModule,
    ExitModalModule

  ],
  exports: [],
  entryComponents: []
})
export class ComponentModule { }
