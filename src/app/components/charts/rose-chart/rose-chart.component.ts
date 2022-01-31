import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-rose-chart',
  templateUrl: './rose-chart.component.html',
  styleUrls: ['./rose-chart.component.scss']
})
export class RoseChartComponent implements OnInit {
  @Input() data: object[];
  @Input() title: string;
  public chartOption: object;
  constructor() { }

  ngOnInit() {
    this.loadChart();
  }
  
  loadChart(): void {
    this.chartOption = {
      title: {
        text: this.title,
      },
      legend: {
        top: 'bottom'
      },

      color: environment.colors.pie,
      toolbox: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series: [
        {
          name: 'géneros',
          type: 'pie',
          radius: [50, 125],
          center: ['50%', '50%'],
          roseType: 'area',
          data:this.data,
          itemStyle: {
            borderRadius: 8
          },
          label: {
            normal: {
              textStyle: {
                color: '#000'
              }
            }
          },
        }
      ]
    };
  }

}
