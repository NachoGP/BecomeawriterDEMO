import { Component, OnInit } from '@angular/core';
import * as Typed from '../../../assets/js/typed.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  Typed: any;
  constructor(private router: Router) { }

  ngOnInit() {

    const typed = new Typed('.type', {
      // tslint:disable-next-line: max-line-length
      strings: ['Lánzate a escribir historias de ficción.', 'Propuestas de escritura para todos los niveles.', 'Escribe. Inspírate y crea relatos cortos!'],
      typeSpeed: 40,
      smartBackspace: true,
      loop: false,
      cursorChar: '',
      loopCount: 2
    });
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  goToLoginChooseAge(){
    this.router.navigate(['/selectage']);
    // this.router.navigate(['/loginkids']);
  }

}
