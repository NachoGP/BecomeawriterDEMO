import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadstoryComponent } from './readstory.component';


const routes: Routes = [{ path: '', component: ReadstoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReadstoryRoutingModule { }
