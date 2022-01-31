import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EndModalComponent } from 'src/app/components/end-modal/end-modal.component';
import { EndModalModule } from 'src/app/components/end-modal/end-modal.module';
import { StartModalComponent } from 'src/app/components/start-modal/start-modal.component';
import { StartModalModule } from 'src/app/components/start-modal/start-modal.module';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';
import { UserService } from 'src/app/services/user.service';
import { SharedModule } from 'src/app/shared.module';
import { WriteboardProRoutingModule } from './writeboard-pro-routing.module';
import { WriteboardProComponent } from './writeboard-pro.component';


@NgModule({
  declarations: [WriteboardProComponent],
  imports: [
    CommonModule,
    WriteboardProRoutingModule,
    SharedModule,
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
export class WriteboardProModule { }
