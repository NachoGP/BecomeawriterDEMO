import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProposalkidsComponent } from './proposalkids.component';


const routes: Routes = [
  {path: '', component: ProposalkidsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProposalkidsRoutingModule { }
