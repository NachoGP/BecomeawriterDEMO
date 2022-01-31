import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Routing */
import { BeawriterRoutingModule } from './beawriter-routing.module';
/** Components & views */
import { BeawriterComponent } from './beawriter.component';


@NgModule({
  declarations: [BeawriterComponent],
  imports: [
    CommonModule,
    BeawriterRoutingModule
  ]
})
export class BeawirterModule { }
