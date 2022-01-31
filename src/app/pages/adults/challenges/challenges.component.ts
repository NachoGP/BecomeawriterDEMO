import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { RetoproModalComponent } from 'src/app/components/retopro-modal/retopro-modal.component';
import { RelatoservicesService } from '../../../services/relatoservices.service';
import * as l from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { ExitModalComponent } from 'src/app/components/exit-modal/exit-modal.component';

export interface Status {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss']
})
export class ChallengesComponent implements OnInit {

  public challengeFormcat5: FormGroup;
  public challengeFormcat15: FormGroup;
  public challengeFormcatNoLimit: FormGroup;
  prioritySelect: any[] = [];
  panelOpenState = false;
  showFiller = false;
  arrayRelatosId: any;
  arrayRelatos5catId: any;
  arrayRelatos15catId: any;
  arrayRelatosNoLimitcatId: any;
  arrayRelatosTotal: any;
  arraycat15: any;
  arraycat5: any;
  arraycatno: any;
  id: any;
  public getId: any;
  usuario: any;
  getUser: any;
  public modal: any[] = [];

  constructor(
    private relatosService: RelatoservicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
  ) {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params.id)
      this.id = params.id;
    })
  }

  CheckExistStory5cat() {
    if (this.arraycat5.total > 0) {
      console.log('tengo relatos Sin Límite', this.arraycatno.total);

    } else {
      console.log("No existe valor", this.arraycatno.total);
      this.toastr.info('Aún no tienes relatos de esta categoría', 'AVISO',
        {
          toastClass: 'ngx-toastr info-toast'
        })
    }
  }
  CheckExistStory15cat() {
    if (this.arraycat15.total > 0) {
      console.log('tengo relatos Sin Límite', this.arraycatno.total);

    } else {
      this.toastr.info('Aún no tienes relatos de esta categoría', 'INFO',
        {
          toastClass: 'ngx-toastr info-toast'
        })

    }
  }
  CheckExistStoryNoLimit() {
    if (this.arraycatno.total > 0) {
      console.log('tengo relatos Sin Límite', this.arraycatno.total);
    } else {
      this.toastr.info('Aún no tienes relatos de esta categoría', 'AVISO',
        {
          toastClass: 'ngx-toastr info-toast'
        })
    }
  }

  newStory() {
    this.router.navigate(['/selecttime']);
  }

  goToMainMenu() {
    this.getId = localStorage.getItem('id');
    this.router.navigate(['/newprofile', this.getId])
  }

 signup5(){
   console.log("Inscribo en cat 5 mi relato");
   
//   this.relatosService
 }



  seeProposal() {
    this.modal['title'] = "Propuesta Pro";

    this.modal['button2'] = 'CERRAR';
    this.dialog.open(RetoproModalComponent, {
      data: {
        title: this.modal['title'],
        body: this.modal['body'],
        button2: this.modal['button2'],
        svg: 'logout-modal',
      },
      autoFocus: false,
      disableClose: true,
    });
  }

  signupPro(){
    
    this.router.navigate(['/writeboardpro', this.getId])
  }


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
  get5catStories() {
    this.relatosService.relatoscat5Id(this.id)
      .then((res) => {
        console.log("relatos categoria 5", res)
        this.arraycat5 = res;
      })
  }

  // find5cat(termino: any): any{


  //   let nuevoArray = this.arrayRelatosId = [];
  //   for (let relato of this.arrayRelatosId) {
  //     let categoria = relato.categoria.toLowerCase();
  //     if ( categoria.indexOf(termino) == '5' ) {
  //       nuevoArray.push( relato );
  //     }
  //   }
  //   return nuevoArray;

  // }


  findNocat() {
    let c = l.find(this.arrayRelatosId, function (o) {
      return this.arrayRelatosId.categoria === '∞'
    });
    console.log("los de Sin Limite", c);
  }

  ngOnInit() {
    this.getId = localStorage.getItem('id');
    this.relatosService.todosRelatos(this.id)
      .then((res) => {
        console.log(res);
        this.arrayRelatosId = res;
      })


    this.relatosService.todosRelatosCat5(this.id)
      .then((res) => {
        console.log("relatos de la cat 5 de este autor", res);
        this.arrayRelatos5catId = res;
      })
    this.relatosService.todosRelatosCat15(this.id)
      .then((res) => {
        console.log("relatos de la cat 15 de este autor", res);
        this.arrayRelatos15catId = res;
      })
    this.relatosService.todosRelatosCatNoLimit(this.id)
      .then((res) => {
        console.log("relatos de la cat 15 de este autor", res);
        this.arrayRelatosNoLimitcatId = res;
      })

    this.relatosService.mostrarRelatosporUsuario(this.id)
      .then((res) => {
        console.log(res)
        this.arrayRelatosTotal = res;

      })

    this.relatosService.relatoscat5Id(this.id)
      .then((res) => {
        console.log("relatos categoria 5", res)
        this.arraycat5 = res;

      })

    this.relatosService.relatoscat15Id(this.id)
      .then((res) => {
        console.log("relatos categoria 15", res)
        this.arraycat15 = res;

      })

    this.relatosService.relatoscatnoId(this.id)
      .then((res) => {
        console.log("relatos categoria SIN LIMITE", res)
        this.arraycatno = res;

      })

    this.getUser = localStorage.getItem('usuario');

    this.challengeFormcat5 = this.formBuilder.group({
      cat5Id: new FormControl('', [Validators.required])

    })
    this.challengeFormcat15 = this.formBuilder.group({
      cat15Id: new FormControl('', [Validators.required])

    })
    this.challengeFormcatNoLimit = this.formBuilder.group({
      catnoId: new FormControl('', [Validators.required])

    })



    // console.log(this.getUser);

  }

  fecha = new Date();


}
