import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatoservicesService } from '../../../services/relatoservices.service';
import * as l from 'lodash';
import { ExitModalComponent } from 'src/app/components/exit-modal/exit-modal.component';

@Component({
  selector: 'app-newprofile',
  templateUrl: './newprofile.component.html',
  styleUrls: ['./newprofile.component.scss'],
  providers: [RelatoservicesService]
})
export class NewprofileComponent implements OnInit {
  panelOpenState = false;
  showFiller = false;
  arrayRelatosId: any;
  arrayRelatosTotal: any;
  arraycat5: any;
  arraycat15: any;
  arraycatno: any;
  noHay: "";
  public id: any;
  public getId: any;
  usuario: any;
  getUser: any;
  public modal: any[] = [];

  constructor(
    private relatosService: RelatoservicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog
    ) {


    this.activatedRoute.params.subscribe(params => {
      // console.log(params.id)
      this.id = params.id;
    })

  }

  newStory() {
    this.router.navigate(['/selecttime']);
  }
  goToMainMenu(){
    this.router.navigate(['/newprofile', this.getId])
  }

  goToChallenge(){

    this.router.navigate(['/challenges', this.id]);
  }

  hayRelatos(){
    return l.values(this.arrayRelatosTotal) > [0]
    }



  exitModal(){
    this.modal['title'] = "Salir";
    this.modal['body'] = '¿Desea salir de Become a Writer?';
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

      this.relatosService.todosRelatos(this.id)
      .then((res) => {
        console.log(res);
        this.arrayRelatosId = res;
        // console.log('soy arraRelatosId', this.arrayRelatosTotal);
        })

    this.relatosService.mostrarRelatosporUsuario(this.id)
      .then((res) => {
        console.log(res)
        this.arrayRelatosTotal = res;

      })

    this.relatosService.relatoscat5Id(this.id)
      .then((res) => {
        console.log( "relatos categoria 5", res)
        this.arraycat5 = res;

      })

    this.relatosService.relatoscat15Id(this.id)
      .then((res) => {
        console.log("relatos categoria 15",res)
        this.arraycat15 = res;

      })

    this.relatosService.relatoscatnoId(this.id)
      .then((res) => {
        console.log("relatos categoria SIN LIMITE", res)
        this.arraycatno = res;

      })
    this.getUser = localStorage.getItem('usuario');
    this.getId = localStorage.getItem('id');

    // console.log(this.getUser);

  }

  fecha = new Date();


}
