import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './proposal.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [ProposalComponent],
  imports: [
    CommonModule,
    ProposalRoutingModule,
    SharedModule
  ]
})
export class ProposalModule { }
