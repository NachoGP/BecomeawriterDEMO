import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecttimekidsComponent } from './selecttimekids.component';


const routes: Routes = [
  { path: '', component: SelecttimekidsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelecttimekidsRoutingModule { }
