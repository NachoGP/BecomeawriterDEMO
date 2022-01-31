import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterkidsComponent } from './registerkids.component';


const routes: Routes = [ {path: '', component: RegisterkidsComponent} ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterkidsRoutingModule { }
