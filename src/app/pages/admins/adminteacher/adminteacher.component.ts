import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RelatoservicesService } from '../../../services/relatoservices.service';


@Component({
  selector: 'adminteacher',
  templateUrl: './adminteacher.component.html',
  styleUrls: ['./adminteacher.component.scss']
})


export class AdminteacherComponent implements OnInit {

  arrayRelatosId: any;
  arrayRelatosTotal: any;
  arraycat5: any;
  arraycat15: any;
  arraycatno: any;
  id: any;
  usuario: '';
  getUser: any;
  fecha = new Date();

  constructor(
    private relatos: RelatoservicesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });
  }

  ngOnInit() {
    console.log(this.usuario);

    this.relatos.todosRelatosAutorKids(this.id)
      .then((res) => {
        this.arrayRelatosId = res;
      });

    this.relatos.mostrarRelatosporUsuarioKids(this.id)
      .then((res) => {
        console.log(res);
        this.arrayRelatosTotal = res;
      });

    this.relatos.relatoscat5IdKids(this.id)
      .then((res) => {
        console.log(res);
        this.arraycat5 = res;
      });

    this.relatos.relatoscat15IdKids(this.id)
      .then((res) => {
        console.log(res);
        this.arraycat15 = res;
      });

    this.relatos.relatoscatnoIdKids(this.id)
      .then((res) => {
        console.log(res);
        this.arraycatno = res;
      });

    this.getUser = localStorage.getItem('usuario');
    console.log(this.getUser);
  }

  logout() {
    this.router.navigate(['/']);
    localStorage.removeItem('usuario');
  }

}
