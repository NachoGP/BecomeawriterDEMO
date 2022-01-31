import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FooteruserComponent } from 'src/app/components/footeruser/footeruser.component';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';
import { UserService } from 'src/app/services/user.service';
import { SharedModule } from 'src/app/shared.module';
import { NewprofileRoutingModule } from './newprofile-routing.module';
import { NewprofileComponent } from './newprofile.component';
import { StoriesTableComponent } from './stories-table/stories-table.component';

@NgModule({
  declarations: [NewprofileComponent, StoriesTableComponent, FooteruserComponent ],
  imports: [
    CommonModule,
    NewprofileRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    RelatoservicesService, UserService
  ]
})
export class NewprofileModule { }
