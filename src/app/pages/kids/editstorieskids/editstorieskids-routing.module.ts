import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditstorieskidsComponent } from './editstorieskids.component';


const routes: Routes = [
  { path: '', component: EditstorieskidsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditstorieskidsRoutingModule { }
