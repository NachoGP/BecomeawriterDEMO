import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllstoriesComponent } from './allstories.component';


const routes: Routes = [{ path: '', component: AllstoriesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllstoriesRoutingModule { }
