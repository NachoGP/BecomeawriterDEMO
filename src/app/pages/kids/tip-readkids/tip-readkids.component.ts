import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipsService } from "../../../services/tips.service";

@Component({
  selector: 'app-tip-readkids',
  templateUrl: './tip-readkids.component.html',
  styleUrls: ['./tip-readkids.component.scss']
})
export class TipReadkidsComponent implements OnInit {

  tip: any;
  id: any;
  arrayTips2: any;
  arreglo2: any;
  getId: any;

  constructor(private tips: TipsService, private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id;
    });
  }

  ngOnInit() {
    this.tips.verTipKids(this.id)
      .then((res) => {
        console.log(res)
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
