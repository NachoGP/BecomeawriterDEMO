
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
  selector: 'app-writeboard',
  templateUrl: './writeboard.component.html',
  styleUrls: ['./writeboard.component.scss']
})
export class WriteboardComponent implements OnInit {

  public propuesta: any;
  public tiempo: any;
  public relatoinfo: any;
  public usuario: any;
  public getId: any;
  public usuarioId: any;
  public countDown: any;
  public count: any; /* = 300;*/
  public seconds: any;
  public minutes: any;
  public ilimitado: any;
  public secondsRest: any;
  public parar: any;
  public formCreateStory: FormGroup;
  public getUser: any;
  public relato: Relato = { titulo: '', texto: '' };
  public data: any[] = [];
  public modal: any[] = [];
  public runTime: any = false;

  constructor(
    private relatosService: RelatoservicesService,
    private router: Router,
    public dialog: MatDialog,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  secondsToMinutesSeconds(seconds: any) {
    const minutes = Math.floor(seconds / 60);
    const secondsRest = Math.round(seconds % 60);
    return `${minutes < 10 ? '0' + minutes : minutes}:${secondsRest < 10 ? '0' + secondsRest : secondsRest}`;
  }

  ngOnDestroy() {
    clearInterval(this.parar);
  }

  handleClickGuardar() {
    this.getId = localStorage.getItem('id');
    const relatoinfo = {
      titulo: this.relato.titulo ? this.relato.titulo : "Sin título",
      tiempo: this.tiempo,
      relato: this.relato.texto,
      propuesta: this.propuesta.objeto,
      usuario_id: this.getId
    }

    this.relatosService.guardarRelato(relatoinfo)
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

  ngOnInit() {

    this.tiempo = JSON.parse(localStorage.getItem('tiempo'));
    this.getUser = localStorage.getItem('usuario');
    this.getId = localStorage.getItem('id');
    console.log('soy el getId', this.getId);

    if (this.tiempo != '∞') {
      this.ilimitado = false;
    } else {
      this.ilimitado = true;
    }
    this.propuesta = JSON.parse(localStorage.getItem('propuesta'));
    this.formCreateStory = this.fb.group({
      titulo: new FormControl('', Validators.required),
      story: new FormControl('', Validators.required)
    });
    this.modal['title'] = '¿Preparado para escribir?';
    this.modal['body'] = "👉  El tiempo comenzará tras este mensaje.";
    this.modal['body2'] = "👉  Recuerda revisar el texto antes de que se cumpla el tiempo.";
    this.modal['body3'] = "👉  Puedes consultar tu propuesta de escritura en el menu lateral.";
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
      this.runTime = true;

      if (JSON.parse(localStorage.getItem('tiempo')) == 5) {
        this.count = 10; //300
      } else if (JSON.parse(localStorage.getItem('tiempo')) == 15) {
        this.count = 900;
      } else {
        this.ilimitado = 1;
      }


      this.parar = setInterval(() => {
        this.count--
        if (this.count == 0) {
          clearInterval(this.parar);

          this.modal['title'] = '¿Qué deseo hacer con mi relato?';
          this.modal['body'] = "Guardarlo para mi.";
          this.modal['body2'] = "Creo que tiene posibilidades: Enviárlo al concurso.";

          const dialogModalEnd = this.dialog.open(EndModalComponent, {
            data: {
              title: this.modal["title"],
              body: this.modal['body'],
              body2: this.modal['body2'],
              button: this.modal['button'],
            },
            autoFocus: false,
            disableClose: true,
          });
          this.handleClickGuardar();
        }
      }, 1000);
    })
  }
}
