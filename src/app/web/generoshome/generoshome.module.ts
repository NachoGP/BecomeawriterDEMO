import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Routing */
import { GeneroshomeRoutingModule } from './generoshome-routing.module';
/** Components & views */
import { GeneroshomeComponent } from './generoshome.component';


@NgModule({
  declarations: [GeneroshomeComponent],
  imports: [
    CommonModule,
    GeneroshomeRoutingModule
  ]
})
export class GeneroshomeModule { }
