import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/** Routing */

/** Components & views */
import { HeroComponent } from './hero.component';
import { LoginkidsModule } from '../loginkids/loginkids.module';
import { LoginModule } from '../login/login.module';
import { LoginkidsComponent } from '../loginkids/loginkids.component';
import { ChooseAgeComponent } from '../choose-age/choose-age.component';
import { ChooseAgeModule } from '../choose-age/choose-age.module';


const routes: Routes = [
  
];

@NgModule({
  declarations: [HeroComponent, ChooseAgeComponent],
  imports: [
    HeroRoutingModule,
    LoginkidsModule,
    LoginModule,
    ChooseAgeModule
  ],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
