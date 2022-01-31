import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartsService } from 'src/app/services/charts.service';
import * as l from 'lodash';
import { NGXLogger } from 'ngx-logger';
@Component({
  selector: 'app-adminsenior',
  templateUrl: './adminsenior.component.html',
  styleUrls: ['./adminsenior.component.scss']
})
export class AdminseniorComponent implements OnInit {

  // cards variables
  public loadingDataCard1 = false;
  public data1Card: string;


  // charts variables
  public loadingNumberStories = false;
  public loadingChart2 = false;
  public loadingChart4 = false;
  public loadingChart5 = false;
  public NumberStories: object[];
  public correctedvsNot: object[];
  public dataChart4: object[];
  public dataChart5: object[];


  private static formatChartData(data: object[]): object[] {
    return l.map(data, function (item: object): object {
      return {
        value: item['value'],
        name: item['tooltip']
      };
    });
  }

  constructor(
    private router: Router,
    private chartsService: ChartsService,
    private logger: NGXLogger
  ) { }


  logout() {
    this.router.navigate(['/']);
    localStorage.removeItem('usuario');
  }


  loadCardsData() {
    this.loadingDataCard1 = false;
    this.chartsService.getDataCard1().subscribe(
      res => {
        this.logger.debug('[chartsService getDataCard1] res: ', res);
        const data = res['body'] ? res['body'] : res;
        this.data1Card = l.toString(data['count'] );
        this.loadingDataCard1 = false;
      }, err => {
        this.logger.error('[rror: ', err);
        this.loadingDataCard1 = false;
      }

    );
  }


  loadChartsData() {
    this.loadingNumberStories = true;
    this.loadingChart2 = true;
    this.loadingChart4 = true;

    // Numero de historias | Chart 1
    this.chartsService.getNumberStories().subscribe(
      res => {
        console.log('[ChartsService] getNumberStories res: ', res);
        this.NumberStories = AdminseniorComponent.formatChartData(l.castArray(res['body'] ? res['body'] : res));
        this.loadingNumberStories = false;
      },
      err => {
        console.log('[ChartsService] getNumberStories error: ', err);
        this.loadingNumberStories = false;
      }
    )

    //Correguidas vs No correguidas | Chart 2

    this.chartsService.getCorrectedStories().subscribe(
      res => {
        console.log('[ChartsService] getNumberStories res: ', res);
        this.correctedvsNot = AdminseniorComponent.formatChartData(l.castArray(res['body'] ? res['body'] : res));
        this.loadingChart2 = false;
      },
      err => {
        console.log('[ChartsService] getNumberStories error: ', err);
        this.loadingChart2 = false;
      }
    )

    //| Chart 3: viene la data del fake
  
    //Chat 4 | Géneros
    this.chartsService.getDataChart4().subscribe(
      res => {
        this.logger.debug('[chartsService getDataChart4-rosa] res: ', res);
        this.dataChart4 = AdminseniorComponent.formatChartData(l.castArray(res['body'] ? res['body'] : res));
        this.loadingChart4 = false;
      },
      err => {
        this.logger.error('error: ', err);
        this.loadingChart4 = false;
      }
    )

    //Chart 5 Basic Bars

    this.chartsService.getDataChart5().subscribe(
      res => {
        this.logger.debug('[charservices getDataCart5] res:' , res);
        this.dataChart5 = AdminseniorComponent.formatChartData(l.castArray(res['body'] ? res['body'] : res));
        this.loadingChart5 = false;
        this.logger.debug('[charservices despues] res:' , res);
      },
      err => {
        this.logger.error('error', err);
        this.loadingChart5 = false;
      }
    )

  }






  ngOnInit(): void {
    this.loadCardsData();
    this.loadChartsData();

  }



}
