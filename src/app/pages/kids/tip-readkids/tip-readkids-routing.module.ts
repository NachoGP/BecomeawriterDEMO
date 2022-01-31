import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TipReadkidsComponent } from './tip-readkids.component';


const routes: Routes = [  { path: '', component: TipReadkidsComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipReadkidsRoutingModule { }
