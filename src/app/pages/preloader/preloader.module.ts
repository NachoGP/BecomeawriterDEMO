import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloaderRoutingModule } from './preloader-routing.module';
import { PreloaderComponent } from './preloader.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [PreloaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    PreloaderRoutingModule
  ],
  exports: [
    PreloaderComponent
  ],
  bootstrap: [PreloaderComponent]
})
export class PreloaderModule { }
