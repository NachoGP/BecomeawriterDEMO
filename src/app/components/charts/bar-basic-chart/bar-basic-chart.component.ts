import { Component, Input, OnInit } from '@angular/core';
import { ChartsService } from 'src/app/services/charts.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-bar-basic-chart',
  templateUrl: './bar-basic-chart.component.html',
  styleUrls: ['./bar-basic-chart.component.scss']
})
export class BarBasicChartComponent implements OnInit {
  @Input() data: any[] = [];
  public dashboardInfo: object;
  @Input() title: string;
  public chartOption: object;
  constructor(private chartservice: ChartsService) { }

  ngOnInit() {
    this.loadChart();
  }

  loadChart(): void {
    this.chartservice.getDataChart5().subscribe(res => {
      if(res && res['body']){
        this.dashboardInfo = res['body'];
        this.chartOption = {
          color: environment.colors.pie,
          // color: ["#3123ae"],
          stateAnimation:{
            animation: "auto",
            animationEasing: "cubicInOut"
          },
          xAxis: {
            type: 'category',
            data:  ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          },
          yAxis: {
            type: 'value',
          },
          series: [{
            // data: [126, 230, 150, 80, 70, 110, 130],
            data: this.dashboardInfo['graph'] ? this.dashboardInfo['graph']['5m'] : [],
            // data: environment.mocksEndpoints.chart5mock,
            type: 'bar',
            
          }]
        }
      }
    });
  }
}
