import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginkidsComponent } from './loginkids.component';


const routes: Routes = [ { path: '', component: LoginkidsComponent }  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginkidsRoutingModule { }
