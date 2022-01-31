import { Component, Input, OnInit } from '@angular/core';
import { environment } from './../../../../environments/environment';
@Component({
  selector: 'app-info-chart',
  templateUrl: './info-chart.component.html',
  styleUrls: ['./info-chart.component.scss']
})
export class InfoChartComponent implements OnInit {
  @Input() data: object[];
  @Input() title: string;
  @Input() tooltipPosition: string;
  public chartOption: object;
  public subStringLabel: number;
  constructor() { }

  ngOnInit(): void {
    this.loadChart();
  }

  loadChart(): void {
    this.chartOption = {
      backgroundColor: '#fff',
      title: {
        text: this.title,
        left: 'center',
        top: 0,
        textStyle: {
          color: '#000',
          fontWeight: 'normal',
          fontFamily: 'Lato',
          fontSize: 16
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)',
        position: this.tooltipPosition ? this.tooltipPosition : 'right'
      },
      color: environment.colors.pie,
      series: [
        {
          name: '',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          data: this.data,
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: '#000'
              },
              formatter: (data) => {
                return data.name.substring(0, this.subStringLabel) + '...';
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: '#000'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          }
        }
      ]
    };
  }

}
