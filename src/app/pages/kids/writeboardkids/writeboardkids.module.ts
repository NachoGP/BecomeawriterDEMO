import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WriteboardkidsRoutingModule } from './writeboardkids-routing.module';
import { WriteboardkidsComponent } from './writeboardkids.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';
import { UserService } from 'src/app/services/user.service';


@NgModule({
  declarations: [WriteboardkidsComponent],
  imports: [
    CommonModule,
    WriteboardkidsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    RelatoservicesService, UserService
  ]
})
export class WriteboardkidsModule { }
