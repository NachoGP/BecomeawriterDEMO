import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditstoriesRoutingModule } from './editstories-routing.module';
import { EditstoriesComponent } from './editstories.component';
import { SharedModule } from 'src/app/shared.module';


@NgModule({
  declarations: [EditstoriesComponent],
  imports: [
    CommonModule,
    EditstoriesRoutingModule,
    SharedModule
  ]
})
export class EditstoriesModule { }
