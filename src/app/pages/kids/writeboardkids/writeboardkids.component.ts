import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { Relato } from '../../interface.interface';
import { RelatoservicesService } from 'src/app/services/relatoservices.service';


@Component({
  selector: 'app-writeboardkids',
  templateUrl: './writeboardkids.component.html',
  styleUrls: ['./writeboardkids.component.scss'],
  providers: [RelatoservicesService]
})
export class WriteboardkidsComponent implements OnInit {

  propuesta: any;
  tiempo: any;
  relatoinfo: any;
  usuario: any;
  getId: any;
  usuariokidsId: any;
  countDown: any;
  count: any; /* = 300;*/
  seconds: any;
  minutes: any;
  ilimitado: any;
  secondsRest: any;
  parar: any;
  relato: Relato = { titulo: '', texto: '' };
  // count = 300;

  constructor(private relatosService: RelatoservicesService, private router: Router) {

  }

  // popup() {
  //   const dialogRef = this.modal.alert()
  //     .size('lg')
  //     .showClose(true)
  //     .title('')
  //     .bodyClass('text-center text-primary lead p-2 m-2')
  //     .footerClass('text-center p-2 m-2')
  //     .okBtnClass('btn btn-primary p-2 m-2 active')
  //     .body(`
  //           <h2>¡EL TIEMPO HA ACABADO!</h2>
  //           <h2>Puedes guardar tu cuento o revísarlo</h2>
  //             <br>
  //            <p>🙂</p>`);

  //   dialogRef.okBtn('Guardar cuento')
  //   dialogRef.addButton('btn btn-primary p-2 m-2', 'Revisar cuento', (dialog) => {
  //     dialog.dialog.dismiss();
  //   });
  //   dialogRef.open().result.then(result => {
  //     this.handleClickGuardarKids();
  //   });
  // }

  secondsToMinutesSeconds(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRest = Math.round(seconds % 60);
    return `${minutes < 10 ? '0' + minutes : minutes}:${secondsRest < 10 ? '0' + secondsRest : secondsRest}`;
  }

  ngOnInit() {

    if (JSON.parse(localStorage.getItem('tiempo')) === '5') {
      this.count = 300; // 300
    } else if (JSON.parse(localStorage.getItem('tiempo')) === '15') {
      this.count = 900;
    } else {
      this.ilimitado = 1;
    }
    this.parar = setInterval(() => {

      this.count--;
      if (this.count === 0) {
        clearInterval(this.parar);
        // this.popup();
      }
    }, 1000);

    this.propuesta = JSON.parse(localStorage.getItem('propuesta'));
    // console.log(this.propuesta.tipo);
    this.tiempo = JSON.parse(localStorage.getItem('tiempo'));
    // console.log(this.tiempo);
  }

  ngOnDestroy() {
    clearInterval(this.parar);
  }

  handleClickGuardarKids() {
    this.getId = localStorage.getItem('id');
    const relatoinfo = {
      titulo: this.relato.titulo,
      tiempo: this.tiempo,
      relato: this.relato.texto,
      propuesta: this.propuesta.objeto,
      usuariokidsId: this.getId
    };

    this.relatosService.guardarRelatoKids(relatoinfo)
      .then((res) => {
        // console.log(res)
        this.router.navigate(['/newprofilekids', this.getId]);
      });

  }

  volverMenuKids() {
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
