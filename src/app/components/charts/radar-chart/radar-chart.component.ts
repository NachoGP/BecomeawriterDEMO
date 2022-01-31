import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
@Component({
  selector: 'app-radar-chart',
  templateUrl: './radar-chart.component.html',
  styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {
  @Input() title: string;
  @Input() tooltipPosition: string;
  public chartOption: object;
  constructor() { }

  ngOnInit() {
    this.loadChart();
  }

  loadChart(): void{
    this.chartOption= {
      title: {
        text: 'Géneros',
    },
    tooltip: {},
    legend: {
        data: ['Relatos T.']
    },
    color: environment.colors.pie,
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#484848',
                backgroundColor: '#f2f2f2',
                borderRadius: 3,
                fontSize: 12,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: 'sales', max: 6500},
            { name: 'Administration', max: 16000},
            { name: ' Techology', max: 30000},
            { name: 'Support', max: 38000},
            { name: 'Development', max: 52000},
            { name: 'Marketing', max: 25000}
        ]
    },
    series: [{
        name: 'Relatos',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: 'Valores 1'
            },
            {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: 'Valores 2'
            }
        ]
    }]
    }
  }

}
