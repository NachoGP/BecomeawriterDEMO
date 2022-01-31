import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatoservicesService } from '../../../services/relatoservices.service';



@Component({
  selector: 'app-logroskids',
  templateUrl: './logroskids.component.html',
  styleUrls: ['./logroskids.component.scss']
})
export class LogroskidsComponent implements OnInit {

  arrayRelatosId: any;
  arrayRelatosTotal: any;
  arraycat5: any;
  arraycat15: any;
  arraycatno: any;
  id: any;
  usuario: any;
  getUser: any;
  getId: any;
  estrellaspremio: any;

  estrellas3: any;
  estrellas2: any;
  estrellas1: any;

  fecha = new Date();

  constructor(private relatos: RelatoservicesService, private activatedRoute: ActivatedRoute, private router: Router) {


    this.activatedRoute.params.subscribe(params => {
      // console.log(params.id)
      this.id = params.id;
    });
  }

  ngOnInit() {

    this.relatos.todosRelatosAutorKids(this.id)
      .then((res) => {
        //  console.log(res)
        this.arrayRelatosId = res;
      });

    this.relatos.mostrarRelatosporUsuarioKids(this.id)
      .then((res) => {
        //  console.log(res)
        this.arrayRelatosTotal = res;
      });

    this.relatos.relatoscat5IdKids(this.id)
      .then((res) => {
        //  console.log(res)
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

  volverMenu() {
    this.getId = localStorage.getItem('id');

    this.router.navigate(['/newprofilekids', this.getId]);

  }

}
