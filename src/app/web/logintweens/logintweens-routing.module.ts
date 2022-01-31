import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogintweensComponent } from './logintweens.component';


const routes: Routes = [ { path: '', component: LogintweensComponent }  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogintweensRoutingModule { }
