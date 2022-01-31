import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteboardRoutingModule } from './writeboard-routing.module';
import { WriteboardComponent } from './writeboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';
import { UserService } from 'src/app/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { StartModalComponent } from 'src/app/components/start-modal/start-modal.component';
import { StartModalModule } from 'src/app/components/start-modal/start-modal.module';
import { EndModalComponent } from 'src/app/components/end-modal/end-modal.component';
import { EndModalModule } from 'src/app/components/end-modal/end-modal.module';


@NgModule({
  declarations: [WriteboardComponent],
  imports: [
    CommonModule,
    WriteboardRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    StartModalModule,
    EndModalModule
  ],
  providers: [
    RelatoservicesService, UserService
  ],
  entryComponents:[
    StartModalComponent, EndModalComponent
  ]
})
export class WriteboardModule { }
