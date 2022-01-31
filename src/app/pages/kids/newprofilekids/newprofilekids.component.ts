import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatoservicesService } from '../../../services/relatoservices.service';
import * as moment from 'moment';
import { TranslateService } from '@ngx-translate/core';
moment.locale('es');
@Component({
  selector: 'app-newprofilekids',
  templateUrl: './newprofilekids.component.html',
  styleUrls: ['./newprofilekids.component.scss'],
  providers: [RelatoservicesService]
})
export class NewprofilekidsComponent implements OnInit {

  arrayRelatosId: any;
  arrayRelatosTotal: any;
  arraycat5: any;
  arraycat15: any;
  arraycatno: any;
  currentTime: any;
  id: any;
  usuario: '';
  getUser: any;
  totalItems: number;
  pageActual: 1;
  greet: any;

  fecha = new Date();

  constructor(
    private relatos: RelatoservicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService) {

    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.currentTime = moment().format('LLLL');
    this.saludo();
    this.getShortStories(1);
    this.relatos.todosRelatosAutorKids(this.id)
      .then((res) => {
        // console.log(res)
        this.arrayRelatosId = res;
      });

    this.relatos.mostrarRelatosporUsuarioKids(this.id)
      .then((res) => {
        // console.log(res)
        this.arrayRelatosTotal = res;
        // console.log(this.arrayRelatosTotal.usuario);
      });

    this.relatos.relatoscat5IdKids(this.id)
      .then((res) => {
        // console.log(res)
        this.arraycat5 = res;
      });

    this.relatos.relatoscat15IdKids(this.id)
      .then((res) => {
        // console.log(res)
        this.arraycat15 = res;
      });

    this.relatos.relatoscatnoIdKids(this.id)
      .then((res) => {
        // console.log(res)
        this.arraycatno = res;
      });
    this.getUser = localStorage.getItem('usuario');
    // console.log(this.getUser);

  }
  getShortStories(event: any) {
    this.pageActual = event;
  }
  saludo() {
    const myDate = new Date();
    const hrs = myDate.getHours();
    let greet: any;

    if (hrs < 12) {
      greet = this.translateService.instant('NEWPROFILE.MORNING');
    } else if (hrs >= 12 && hrs <= 17) {
      greet = this.translateService.instant('NEWPROFILE.AFTERNOON');
    } else if (hrs >= 17 && hrs <= 24) {
      greet = this.translateService.instant('NEWPROFILE.EVENING');
    }
    document.getElementById('greeting').innerHTML = greet;
  }



  logout() {
    this.router.navigate(['/']);
    localStorage.removeItem('usuario');
    console.log('elimina el usuario del LocalStorage');
  }
}
