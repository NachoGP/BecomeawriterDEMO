import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseAgeComponent } from './choose-age.component';

const routes: Routes = [{ path: '', component: ChooseAgeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChooseAgeRoutingModule { }
