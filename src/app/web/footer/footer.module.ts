import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/** Routing */
import { FooterRoutingModule } from './footer-routing.module';
/** Components & views */
import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule
  ]
})
export class FooterModule { }
