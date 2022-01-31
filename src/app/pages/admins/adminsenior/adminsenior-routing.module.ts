import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminseniorComponent } from './adminsenior.component';


const routes: Routes = [{ path: '', component: AdminseniorComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminseniorRoutingModule { }
