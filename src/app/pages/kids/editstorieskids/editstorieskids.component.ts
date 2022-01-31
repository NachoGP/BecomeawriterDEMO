import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';

@Component({
  selector: 'app-editstorieskids',
  templateUrl: './editstorieskids.component.html',
  styleUrls: ['./editstorieskids.component.scss'],
  providers: [RelatoservicesService]
})
export class EditstorieskidsComponent implements OnInit {
  arrayRelatoUno: any;
  arrayRelatoDos: any;
  arrayRelatosId: any;
  countRelatos: any;
  id: any;
  propuesta: any;
  tiempo: any;
  getId: any;
  arreglo: any;
  arreglo2: any;
  notas: any;
  nota: boolean;
  nota2: boolean;
  mostrar2: any;
  mostrarprop: boolean;
  mostrarprop1: boolean;
  mostrarprop2: boolean;
  // mostrarprop3:boolean;
  constructor(
    private relatoservices: RelatoservicesService,
    private relatos: RelatoservicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id;
    });
    console.log(this.arrayRelatoUno)
    this.nota = true;
    this.nota2 = true;
    this.mostrarprop1 = false;
    this.mostrarprop2 = false;
    // this.mostrarprop3= false;
  }
  Ocultarpropuestahist() {
      this.mostrarprop1 = !this.mostrarprop1;
      this.mostrarprop2 = !this.mostrarprop2;
  }

  ngOnInit() {

    this.propuesta = JSON.parse(localStorage.getItem('propuesta'));
    // console.log(this.propuesta.tipo);
    // console.log(this.id)
    this.relatoservices.pedirunRelatoKids(this.id)
      .then((res) => {
        this.arrayRelatoUno = res[0];
        this.arreglo = JSON.parse(this.arrayRelatoUno.propuesta);
        console.log(this.arreglo);
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

  handleClickBorrar() {

    this.relatoservices.borrarRelatoKids(this.id);
    console.log('Relato Borrado con Éxito');
    this.getId = localStorage.getItem('id');
    this.router.navigate(['/newprofilekids', this.getId]);
    window.location.reload();
  }

  cerrarSesion() {
    localStorage.removeItem('id');
    localStorage.removeItem('tiempo');
    localStorage.removeItem('propuesta');
    this.router.navigate(['/']);
  }
}
