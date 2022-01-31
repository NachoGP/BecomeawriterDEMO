import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { GeneroshomeComponent } from './generoshome/generoshome.component';
import { HeroComponent } from './hero/hero.component';
import { HomeKidsComponent } from './home-kids/home-kids.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { MapComponent } from './map/map.component';
import { PricingComponent } from './pricing/pricing.component';
import { WebRoutingModule } from './web-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Maps
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { BeawriterComponent } from './beawirter/beawriter.component';
import { BecomeawriterComponent } from './becomeawriter/becomeawriter.component';
import { RulesComponent } from './rules/rules.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    FooterComponent,
    GeneroshomeComponent,
    HeroComponent,
    HomeKidsComponent,
    HowitworksComponent,
    MapComponent,
    PricingComponent,
    MainComponent,
    BeawriterComponent,
    BecomeawriterComponent,
    RulesComponent
  ],
  imports: [
    CommonModule,
    WebRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAMdDkzmwls6vCB-pToZz4XlVucmVZ8LI8'
    }),
    HttpClientModule,

  ]
})
export class WebModule { }
