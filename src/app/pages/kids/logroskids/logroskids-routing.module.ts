import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogroskidsComponent } from './logroskids.component';


const routes: Routes = [ { path: '', component: LogroskidsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogroskidsRoutingModule { }
