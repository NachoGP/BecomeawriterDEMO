import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatoservicesService } from '../../../services/relatoservices.service';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ExitModalComponent } from 'src/app/components/exit-modal/exit-modal.component';
@Component({
  selector: 'app-editstories',
  templateUrl: './editstories.component.html',
  styleUrls: ['./editstories.component.scss'],
  providers: [RelatoservicesService]
})
export class EditstoriesComponent implements OnInit {
  arrayRelatoUno: any;
  arrayRelatoDos: any;
  arrayRelatosId: any;
  countRelatos: any;
  id: any;
  propuesta: any;
  tiempo: any;
  arreglo: any;
  arreglo2: any;
  notas: any;
  nota: boolean = true;
  nota2: boolean = true;
  mostrar2: any;
  mostrarprop: boolean;
  mostrarprop1: boolean;
  mostrarprop2: boolean;
  getUser: any;
  getUserId: any;
  public getId: any;
  public modal: any[] = [];
  constructor(

    private relatoservices: RelatoservicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private toastr: ToastrService) {

    this.activatedRoute.params.subscribe(params => {
      console.log(params.id);
      this.id = params.id;
    });


    this.mostrarprop1 = true;
    this.mostrarprop2 = true;
  }

  Ocultarpropuestahist() {
    let existpro1 = (this.propuesta.objeto.genero).value;
    console.log('existpro1', existpro1);
    if (existpro1) {
      this.mostrarprop1
    } else {
      this.mostrarprop2
      this.mostrarprop1 = false
    }

    // this.mostrarprop1 = !this.mostrarprop1;
    // this.mostrarprop2 = !this.mostrarprop2;
  }

  newStory() {
    this.router.navigate(['/selecttime']);
  }

  goToMainMenu() {
    this.getId = localStorage.getItem('id');
    this.router.navigate(['/newprofile', this.getId])
  }

  goToChallenge() {
    this.getUserId = localStorage.getItem('id');
    this.router.navigate(['/challenges', this.getUserId]);
  }

  exitModal() {
    this.modal['title'] = "Salir";
    this.modal['body'] = '??Desea salir de Become a Writer?';
    this.modal['button1'] = 'CANCELAR';
    this.modal['button2'] = 'ACEPTAR';
    this.dialog.open(ExitModalComponent, {
      data: {
        title: this.modal['title'],
        body: this.modal['body'],
        button1: this.modal['button1'],
        button2: this.modal['button2'],
        svg: 'logout-modal',
      },
      // height: '85vh',
      autoFocus: false,
      disableClose: true,
    });
  }

  ngOnInit() {

    this.getUser = localStorage.getItem('usuario');
    this.getUserId = localStorage.getItem('Id');
    this.propuesta = JSON.parse(localStorage.getItem('propuesta'));

    console.log(this.id);
    this.relatoservices.pedirunRelato(this.id)
      .then((res) => {
        this.arrayRelatoUno = res[0];
        console.log("Soy arrayRelatoUno", this.arrayRelatoUno);
        this.arreglo = JSON.parse(this.arrayRelatoUno.propuesta);
        console.log("Soy arreglo", this.arreglo);

      });

    this.relatoservices.mostrarRelatosporUsuario(this.id)
      .then((res) => {
        // console.log(res)
        this.countRelatos = res;
      });

    this.relatoservices.todosRelatos(this.id)
      .then((res) => {
        this.arrayRelatosId = res;
      });
  }



  // handleClickBorrar() {
  //   this.relatoservices.borrarRelato(this.id);
  //   // console.log("Relato Borrado con ??xito")
  //   this.getId = localStorage.getItem('id');
  //   this.router.navigate(['/newprofile', this.getId]);
  //   window.location.reload();
  // }


  cerrarSesion() {
    localStorage.removeItem('id');
    localStorage.removeItem('tiempo');
    localStorage.removeItem('propuesta');
    this.router.navigate(['/']);
  }

}
