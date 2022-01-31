import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminteacherComponent } from './adminteacher.component';


const routes: Routes = [{ path: '', component: AdminteacherComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminteacherRoutingModule { }
