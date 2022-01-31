import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadstorykidsComponent } from './readstorykids.component';


const routes: Routes = [
  { path: '', component: ReadstorykidsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadstorykidsRoutingModule { }
