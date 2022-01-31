import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/** Routing */
import { HomeKidsRoutingModule } from './home-kids-routing.module';
/** Components & views */
import { HomeKidsComponent } from './home-kids.component';


@NgModule({
  declarations: [HomeKidsComponent],
  imports: [
    CommonModule,
    HomeKidsRoutingModule
  ]
})
export class HomeKidsModule { }
