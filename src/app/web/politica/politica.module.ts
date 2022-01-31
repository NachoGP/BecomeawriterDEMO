import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoliticaRoutingModule } from './politica-routing.module';
import { PoliticaComponent } from './politica.component';


@NgModule({
  declarations: [PoliticaComponent],
  imports: [
    CommonModule,
    PoliticaRoutingModule
  ]
})
export class PoliticaModule { }
