import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesComponent } from './challenges.component';
import { SharedModule } from 'src/app/shared.module';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';
import { WinnersComponent } from './winners/winners.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RetoproModalComponent } from 'src/app/components/retopro-modal/retopro-modal.component';

@NgModule({
  declarations: [ChallengesComponent, WinnersComponent],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,


  
  ],
  providers: [
    RelatoservicesService, UserService
  ]
})
export class ChallengesModule { }
