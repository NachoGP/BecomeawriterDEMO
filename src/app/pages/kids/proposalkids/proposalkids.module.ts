import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalkidsRoutingModule } from './proposalkids-routing.module';
import { ProposalkidsComponent } from './proposalkids.component';


@NgModule({
  declarations: [ProposalkidsComponent],
  imports: [
    CommonModule,
    ProposalkidsRoutingModule
  ]
})
export class ProposalkidsModule { }
