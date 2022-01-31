import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { NGXLogger } from 'ngx-logger';
import * as moment from 'moment';
import * as _ from 'lodash';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { DashboardService } from 'src/app/services/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public loadingDashboardData = false;
  public spinnerGraph = true;
  public dashboardInfo: object;
  public chartOptions: object;

  constructor(
    private translate: TranslateService,
    private logger: NGXLogger,
    private router: Router,
    private dashboardService: DashboardService) {
    }
    private getDashboardInfo(): void {
  this.loadingDashboardData = true;
  this.dashboardService.getDashboardData().subscribe(res => {
    if (res && res['body']) {
      this.dashboardInfo = res['body'];
      this.loadingDashboardData = false;
      this.spinnerGraph = false;
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
          // data: this.dashboardInfo['graph'] ? this.dashboardInfo['graph']['early'] : [],
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
          //PREVENTIVAS
          // data: this.dashboardInfo['graph'] ? this.dashboardInfo['graph']['preventiva'] : [],
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
        }
        ],
      };
    }
  }, error => {
    this.logger.error(error);
  });
}

ngOnInit() {
  this.loadingDashboardData = true;
  this.getDashboardInfo();
}

}
