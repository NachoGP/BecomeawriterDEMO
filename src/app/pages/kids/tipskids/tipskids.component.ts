
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipsService } from "../../../services/tips.service";

@Component({
  selector: 'app-tipskids',
  templateUrl: './tipskids.component.html',
  styleUrls: ['./tipskids.component.scss'],
  providers: [TipsService]
})
export class TipskidsComponent implements OnInit {

  arrayTips: any;
  arrayTips2: any;
  getId: any;
  tip: any;
  id: any;
  fecha = new Date();

  constructor(
    private tips: TipsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id;
    });
  }

  ngOnInit() {

    this.tips.mostrarTipsKids()
      .then((res) => {
        console.log(res);
        this.arrayTips = res;
      });

    this.tips.verTipKids(this.id)
      .then((res) => {
        console.log(res);
        this.arrayTips2 = res;
      });
  }

  volverMenu() {
    this.getId = localStorage.getItem('id');
    this.router.navigate(['/newprofilekids', this.getId]);
  }

  cerrarSesion() {
    localStorage.removeItem('id');
    localStorage.removeItem('tiempo');
    localStorage.removeItem('propuesta');
    this.router.navigate(['/']);
  }
}
