import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Routing */
import { HowitworksRoutingModule } from './howitworks-routing.module';
/** Components & views */
import { HowitworksComponent } from './howitworks.component';


@NgModule({
  declarations: [HowitworksComponent],
  imports: [
    CommonModule,
    HowitworksRoutingModule
  ]
})
export class HowitworksModule { }
