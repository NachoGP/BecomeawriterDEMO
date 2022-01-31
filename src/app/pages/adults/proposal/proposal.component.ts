import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { ExitModalComponent } from 'src/app/components/exit-modal/exit-modal.component';
import { RelatoservicesService } from '../../../services/relatoservices.service';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
  providers: [RelatoservicesService]
})
export class ProposalComponent implements OnInit {

  buttonseleccion: 'alert-danger';
  arrayPropuesta1: any;
  arrayPropuesta2: any;
  isActive = false;
  tipo: any;
  prop1: any;
  prop2: any;
  tiempo: any;
  public modal: any[] = [];

  activeButton() {
    this.isActive = !this.isActive;
  }
  constructor(
    private propuesta1: RelatoservicesService,
    private propuesta2: RelatoservicesService,
    private router: Router,
    public dialog: MatDialog
    ) { }



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


  guardarPropuesta() {

    this.prop1 = {
      tiempo: this.tiempo,
      tipo: 'propuesta1',
      objeto: this.arrayPropuesta1
    }

    this.prop2 = {
      tiempo: this.tiempo,
      tipo: 'propuesta2',
      objeto: this.arrayPropuesta2
    }

    if (this.isActive === true) {
      localStorage.setItem('propuesta', JSON.stringify(this.prop1));
      // console.log(this.arrayPropuesta1);
    }

    if (this.isActive === false) {
      localStorage.setItem('propuesta', JSON.stringify(this.prop2));
      // console.log(this.arrayPropuesta2);

    }

    this.router.navigate(['/writeboard']);

  }

  ngOnInit() {

    this.propuesta1.pedirPropuesta1()
      .then((res) => {
        // console.log(res)
        this.arrayPropuesta1 = res;
      })
    this.propuesta2.pedirPropuesta2()
      .then((res) => {
        // console.log(res)
        this.arrayPropuesta2 = res;
      })
  }

}
