import { Component, OnInit } from '@angular/core';
import * as Typed from '../../../assets/js/typed.js';
@Component({
  selector: 'app-generoshome',
  templateUrl: './generoshome.component.html',
  styleUrls: ['./generoshome.component.scss']
})
export class GeneroshomeComponent implements OnInit {

  Typed: any;
  constructor() { }

  ngOnInit() {

    const typed = new Typed('.type2', {
      strings: ['Ciencia Ficción', 'Misterio', 'Aventura', 'Microrelatos', '¡Escribe y disfruta!'],
      typeSpeed: 80,
      smartBackspace: true,
      loop: true,
      backDelay: 700,
      showCursor: true,
      cursorChar: '',
      autoInsertCss: true
    });
  }
}
