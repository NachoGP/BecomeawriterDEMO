import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RelatoservicesService } from '../../../services/relatoservices.service';

@Component({
  selector: 'app-proposalkids',
  templateUrl: './proposalkids.component.html',
  styleUrls: ['./proposalkids.component.scss']
})
export class ProposalkidsComponent implements OnInit {
  buttonseleccion: 'alert-danger';
  arrayPropuesta1: any;
  arrayPropuesta2: any;
  isActive = false;
  tipo: any;
  prop1: any;
  prop2: any;
  tiempo: any;

  activeButton() {
    this.isActive = !this.isActive;
  }
  constructor(private propuesta1: RelatoservicesService, private propuesta2: RelatoservicesService, private router: Router) { }

  ngOnInit() {

    this.propuesta1.pedirPropuesta1Kids()
      .then((res) => {
        // console.log(res)
        this.arrayPropuesta1 = res;
      });
    this.propuesta2.pedirPropuesta2Kids()
      .then((res) => {
        // console.log(res)
        this.arrayPropuesta2 = res;
      });
  }

  guardarPropuestaKids() {

    this.prop1 = {
      tiempo: this.tiempo,
      tipo: 'propuesta1',
      objeto: this.arrayPropuesta1
    };

    this.prop2 = {
      tiempo: this.tiempo,
      tipo: 'propuesta2',
      objeto: this.arrayPropuesta2
    };

    if (this.isActive === true) {
      const propuesta1 = localStorage.setItem('propuesta', JSON.stringify(this.prop1));
      console.log(this.arrayPropuesta1);
    }

    if (this.isActive === false) {
      const propuesta2 = localStorage.setItem('propuesta', JSON.stringify(this.prop2));
      console.log(this.arrayPropuesta2);
    }

    this.router.navigate(['/writeboardkids']);
  }
}


