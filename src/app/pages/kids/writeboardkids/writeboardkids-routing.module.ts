import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteboardkidsComponent } from './writeboardkids.component';


const routes: Routes = [ { path: '', component: WriteboardkidsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteboardkidsRoutingModule { }
