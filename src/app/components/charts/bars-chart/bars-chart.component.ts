
import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
import { environment } from '../../../../environments/environment';
import { DashboardService } from 'src/app/services/dashboard.service';
import { GenericModalComponent } from '../../generic-modal/generic-modal.component';
import { NGXLogger } from 'ngx-logger';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-bars-chart',
  templateUrl: './bars-chart.component.html',
  styleUrls: ['./bars-chart.component.scss']
})
export class BarsChartComponent implements OnInit {

  public dashboardInfo: object;
  public chartOptions: object;
  @Input() data: any[] = [];

  constructor(private dashboardService: DashboardService,
    private dialog: MatDialog,
    private logger: NGXLogger,
    ) {
    }

    ngOnInit() {
      this.getDashboardInfo();
      // console.log('getDashboardInfo', this.getDashboardInfo);
    }

    private getDashboardInfo(): void {
      this.dashboardService.getDashboardData().subscribe(res => {
        if (res && res['body']) {
          this.dashboardInfo = res['body'];
          this.chartOptions = {
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: moment.months(),
              axisLabel: {
                rotate: 45,
                formatter: (value) => {
                  return value.substring(0, 3) + '.';
                }
              },
              axisPointer: {
                show: true,
                label: {
                  show: false
                }
              }
            },
            tooltip: {
              show: true
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: (value) => {
                  return (value >= 10000) ? value / 1000 + 'k' : value;
                }
              }
            },
            grid: {
              left: 40,
              top: 15,
              right: 15,
              bottom: 35,
            },
            series: [{
               //Relatos 5 Minutos
              data: this.dashboardInfo['graph'] ? this.dashboardInfo['graph']['5m'] : [],
              type: 'line',
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: environment.color.main // color at 0% position
                  }],
                  global: false
                }
              },
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: environment.color.main // color at 0% position
                  }],
                  global: false
                }
              }
            },
            {
              //Relatos 15 Minutos
              data: this.dashboardInfo['graph'] ? this.dashboardInfo['graph']['15m'] : [],
              type: 'line',
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: environment.color.secondary // color at 0% position
                  }],
                  global: false
                }
              },
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: environment.color.secondary // color at 0% position
                  }],
                  global: false
                }
              }
            },
            {
              //SIN LIMITE
              data: this.dashboardInfo['graph'] ? this.dashboardInfo['graph']['nolimit'] : [],
              type: 'line',
              areaStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: environment.color.tertiary // color at 0% position
                  }],
                  global: false
                }
              },
              itemStyle: {
                color: environment.color.tertiary
              },
              lineStyle: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0, color: environment.color.tertiary // color at 0% position
                  }],
                  global: false
                }
              }
            }
            ],
          };

        }

      },error => {
        this.dialog.open(GenericModalComponent, {
          data: {
            message: "Error al dato",
            svg: 'closedsession'
          }
        });
        this.logger.error(error);
      });
    }
    
}

