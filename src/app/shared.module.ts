/** Angular / core / libraries */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from './material.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { SpinnerModule } from './components/spinner/spinner.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    TranslateModule,
    MaterialModule,
    SpinnerModule,
    NgxEchartsModule
  ]
})
export class SharedModule { }
