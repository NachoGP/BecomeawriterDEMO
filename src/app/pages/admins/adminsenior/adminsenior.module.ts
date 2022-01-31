import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared.module';

import { AdminseniorRoutingModule } from './adminsenior-routing.module';
import { AdminseniorComponent } from './adminsenior.component';
import { InfoCardComponent } from 'src/app/components/info-card/info-card.component';
import { InfoChartComponent } from 'src/app/components/charts/info-chart/info-chart.component';
import { BarsChartComponent } from 'src/app/components/charts/bars-chart/bars-chart.component';
import { RadarChartComponent } from 'src/app/components/charts/radar-chart/radar-chart.component';
import { RoseChartComponent } from 'src/app/components/charts/rose-chart/rose-chart.component';
import { BarBasicChartComponent } from 'src/app/components/charts/bar-basic-chart/bar-basic-chart.component';


@NgModule({
  declarations: [
    AdminseniorComponent,
    InfoCardComponent,
    InfoChartComponent,   // Pie chart
    BarsChartComponent ,  //Gráfica de barras
    RadarChartComponent,
    RoseChartComponent,
    BarBasicChartComponent  //De barras clásicas
  ],
  imports: [
    CommonModule,
    AdminseniorRoutingModule, //Es nuestro dashboard
    SharedModule
  ]
})
export class AdminseniorModule { }
