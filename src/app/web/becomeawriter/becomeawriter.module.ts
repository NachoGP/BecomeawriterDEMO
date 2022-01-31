import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Routing */
import { BecomeawriterRoutingModule } from './becomeawriter-routing.module';
/** Components & views */
import { BecomeawriterComponent } from './becomeawriter.component';


@NgModule({
  declarations: [BecomeawriterComponent],
  imports: [
    CommonModule,
    BecomeawriterRoutingModule
  ]
})
export class BecomeawriterModule { }
