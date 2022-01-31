import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WriteboardComponent } from './writeboard.component';


const routes: Routes = [  { path: '', component: WriteboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WriteboardRoutingModule { }
