import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminteacherRoutingModule } from './adminteacher-routing.module';
import { AdminteacherComponent } from './adminteacher.component';

// Traducción
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);
import { HttpClient } from '@angular/common/http';
import { SharedModule } from 'src/app/shared.module';

@NgModule({
  declarations: [ AdminteacherComponent],
  imports: [
    CommonModule,
    SharedModule,
    AdminteacherRoutingModule,

  ]
})
export class AdminteacherModule { }
