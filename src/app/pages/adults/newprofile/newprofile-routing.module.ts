import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewprofileComponent } from './newprofile.component';


const routes: Routes = [{ path: '', component: NewprofileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewprofileRoutingModule { }
