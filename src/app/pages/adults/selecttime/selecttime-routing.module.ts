import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelecttimeComponent } from './selecttime.component';


const routes: Routes = [
  { path: '', component: SelecttimeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelecttimeRoutingModule { }
