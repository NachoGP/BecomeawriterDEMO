import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatoservicesService } from '../../../services/relatoservices.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-allstorieskids',
  templateUrl: './allstorieskids.component.html',
  styleUrls: ['./allstorieskids.component.scss']
})
export class AllstorieskidsComponent implements OnInit {

  arrayRelatos: any;
  arraytodosrelatosBe: any;
  arraytodospaises: any;
  arraytodosrelatosIlim: any;
  arraytodosrelatos5: any;
  arraytodosrelatos15: any;
  id: any;
  getId: any;
  totalItems: number;
  pageActual: 1;
  fecha = new Date();

  constructor(
    private relatos: RelatoservicesService,
    private activatedRoute: ActivatedRoute,
    private user: UserService,
    private router: Router
    ) {

  }
  ngOnInit() {
    this.relatos.pedirRelatosbyDateKids()
      .then((res) => {
        // console.log(res.json())
        this.arrayRelatos = res;
      });

    this.relatos.nrelatosTotalKids()
      .then((res) => {
        // console.log(res.json())
        this.arraytodosrelatosBe = res;
      });

    this.relatos.nTotalrelatoscatilimitadaKids()
      .then((res) => {
        // console.log(res.json())
        this.arraytodosrelatosIlim = res;
      });

    this.relatos.nTotalrelatoscat5Kids()
      .then((res) => {
        // console.log(res.json())
        this.arraytodosrelatos5 = res;
      });

    this.relatos.nTotalrelatoscat15Kids()
      .then((res) => {
        // console.log(res.json())
        this.arraytodosrelatos15 = res;
      });

    this.user.ncountryTotalKids()
      .then((res) => {
        // console.log(res.json())
        this.arraytodospaises = res;
      });
  }

  getShortStories(event: any) {
    this.pageActual = event;
  }

  volverMenu() {
    this.getId = localStorage.getItem('id');
    this.router.navigate(['/newprofilekids', this.getId]);
  }

}
