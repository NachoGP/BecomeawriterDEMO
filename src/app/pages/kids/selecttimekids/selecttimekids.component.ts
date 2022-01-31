import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selecttimekids',
  templateUrl: './selecttimekids.component.html',
  styleUrls: ['./selecttimekids.component.scss']
})
export class SelecttimekidsComponent implements OnInit {

  tiempo: any;

  isActive = false;
  isActive2 = false;
  isActive3 = false;


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


  constructor(private router: Router) { }

  ngOnInit() {
  }

  guardarTiempo() {
    let tiempoSelect = localStorage.setItem('tiempo', JSON.stringify(this.tiempo));
    // console.log(this.tiempo)



    this.router.navigate(['/proposalkids'])

  }


}
