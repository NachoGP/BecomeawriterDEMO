import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';
import { UserService } from 'src/app/services/user.service';
import { SharedModule } from 'src/app/shared.module';
import { NewprofilekidsRoutingModule } from './newprofilekids-routing.module';
import { NewprofilekidsComponent } from './newprofilekids.component';





@NgModule({
  declarations: [NewprofilekidsComponent],
  imports: [
    CommonModule,
    NewprofilekidsRoutingModule,
    SharedModule
  ],
  providers: [
    RelatoservicesService, UserService
  ]

})
export class NewprofilekidsModule { }
