import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatoservicesService } from '../../../services/relatoservices.service';

@Component({
  selector: 'app-readstorykids',
  templateUrl: './readstorykids.component.html',
  styleUrls: ['./readstorykids.component.scss']
})
export class ReadstorykidsComponent implements OnInit {
  arrayRelatoUno: any;
  arrayRelatosId: any;
  countRelatos: any;
  id: any;
  propuesta: any;
  tiempo: any;
  getId: any;
  arreglo: any;
  arreglo2: any;
  mostrarprop1: boolean;
  mostrarprop2: boolean;

  constructor(
    private relatoservices: RelatoservicesService,
    private relatos: RelatoservicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id;
    });
  }
  Ocultarpropuestahist() {

    this.mostrarprop1 = !this.mostrarprop1;
    this.mostrarprop2 = !this.mostrarprop2;
  }

  ngOnInit() {
    this.propuesta = JSON.parse(localStorage.getItem('propuesta'));
    this.relatoservices.pedirunRelatoKids(this.id)
      .then((res) => {

        this.arrayRelatoUno = res[0];
        this.arreglo = JSON.parse(this.arrayRelatoUno.propuesta);
      });

    this.relatoservices.mostrarRelatosporUsuarioKids(this.id)
      .then((res) => {
        this.countRelatos = res;
      });

    this.relatos.todosRelatosKids(this.id)
      .then((res) => {
        this.arrayRelatosId = res;

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
