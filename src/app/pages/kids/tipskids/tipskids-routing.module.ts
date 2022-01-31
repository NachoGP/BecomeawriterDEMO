import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipskidsComponent } from './tipskids.component';


const routes: Routes = [ { path: '', component: TipskidsComponent },];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipskidsRoutingModule { }
