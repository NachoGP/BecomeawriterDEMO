import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteboardProComponent } from './writeboard-pro.component';


const routes: Routes = [{path:'', component: WriteboardProComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteboardProRoutingModule { }
