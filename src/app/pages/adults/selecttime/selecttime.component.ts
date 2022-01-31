import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { ExitModalComponent } from 'src/app/components/exit-modal/exit-modal.component';
@Component({
  selector: 'app-selecttime',
  templateUrl: './selecttime.component.html',
  styleUrls: ['./selecttime.component.scss']
})
export class SelecttimeComponent implements OnInit {

  public tiempo: any;
  getId: any;
  public modal: any[] = [];
  public isActive = false;
  public isActive2 = false;
  public isActive3 = false;


  pressButton() {
    this.isActive = true;
    this.isActive2 = false;
    this.isActive3 = false;
    this.tiempo = 5;
  }

  pressButton2() {
    this.isActive = false;
    this.isActive2 = true;
    this.isActive3 = false;
    this.tiempo = 15;
  }

  pressButton3() {
    this.isActive = false;
    this.isActive2 = false;
    this.isActive3 = true;
    this.tiempo = "∞";
  }


  constructor(private router: Router, public dialog: MatDialog) { }


  exitModal() {
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

  guardarTiempo() {
    let tiempoSelect = localStorage.setItem('tiempo', JSON.stringify(this.tiempo));
    // console.log(this.tiempo)
    this.router.navigate(['/proposal'])
  }

  prevPage() {
    this.getId = localStorage.getItem('id');
    this.router.navigate(['/newprofile', this.getId]);
  }


  ngOnInit() {
  }



}
