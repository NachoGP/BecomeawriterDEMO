
import { RelatoservicesService } from '../../../services/relatoservices.service';
import { Relato } from './../../interface.interface';
import { Component, OnInit, ViewContainerRef, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StartModalComponent } from 'src/app/components/start-modal/start-modal.component';
import { EndModalComponent } from 'src/app/components/end-modal/end-modal.component';
import { ConfirmationModalComponent } from 'src/app/components/confirmation-modal/confirmation-modal.component';
import { ExitModalComponent } from 'src/app/components/exit-modal/exit-modal.component';
@Component({
  selector: 'app-writeboard-pro',
  templateUrl: './writeboard-pro.component.html',
  styleUrls: ['./writeboard-pro.component.scss']
})
export class WriteboardProComponent implements OnInit {

  
  public propuesta: any;
  public tiempo: any;
  public relatoinfo: any;
  public usuario: any;
  public getId: any;
  public usuarioId: any;
  public ilimitado: any;

  public formCreateStory: FormGroup;
  public getUser: any;
  public relato: Relato = { titulo: '', texto: '' };
  public data: any[] = [];
  public modal: any[] = [];
  public propuestaPro: any;


  constructor(
    private relatosService: RelatoservicesService,
    private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  saveStory() {
    this.getId = localStorage.getItem('id');
    const relatoinfo = {
      titulo: this.relato.titulo ? this.relato.titulo : "Sin título",
      tiempo: this.tiempo,
      relato: this.relato.texto ? this.relato.texto : "Relato Vacío",
      propuesta: this.propuestaPro.body,
      reto: 'Sí',
      usuario_id: this.getId
    }

    this.relatosService.guardarRelatoPro(relatoinfo)
      .then((res) => {
        this.router.navigate(['/newprofile', this.getId]);
        this.toastr.info('Relato guardado con éxito', '¡Genial!');
      })
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
 
  volverMenu() {
    this.getId = localStorage.getItem('id');
    console.log("Entra");
    this.router.navigate(['/newprofile', this.getId]);

  }

getPropuestaPro(){
  this.relatosService.pedirPropuestaPro()
    .subscribe((res : any) =>{
      this.propuestaPro = res;
      console.log('signuPro', res.body);
    })
}


  ngOnInit() {

    this.getUser = localStorage.getItem('usuario');
    this.getId = localStorage.getItem('id');
    this.ilimitado = true;
    // this.relatosService.pedirPropuestaPro();

    this.formCreateStory = this.fb.group({
      titulo: new FormControl('', Validators.required),
      story: new FormControl('', Validators.required)
    });
    this.modal['title'] = '¿Preparado para escribir?';
    this.modal['body'] = "👉  La modalidad 'Desafío PRO' no tiene tiempo limitado.";
    this.modal['body2'] = "👉  Podrás guardarlo y correguirlo cuando lo desees.";
    this.modal['body3'] = "👉  Puedes consultar la propuesta del desafío en el menu lateral.";
    this.modal['body4'] = "👉  Ordena tus ideas, respira profundo y cuando estés preparado pulsa:";

    const dialogModal = this.dialog.open(StartModalComponent, {
      data: {
        title: this.modal["title"],
        body: this.modal['body'],
        body2: this.modal['body2'],
        body3: this.modal['body3'],
        body4: this.modal['body4'],
        button: this.modal['button'],
        svg: 'add',
      },
      autoFocus: false,
      disableClose: true,
    });

    dialogModal.afterClosed().subscribe(result => {

      this.ilimitado = 1;
    })
    this.getPropuestaPro();
  }
}
