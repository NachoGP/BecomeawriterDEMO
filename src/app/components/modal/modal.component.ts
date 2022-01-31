import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parameters } from '../../../libs/cfactory/parameters';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  display: string = 'block';
  parameters: Parameters;

  constructor(private r: Router) { }
  
  cancel() {
    this.display = "none";
  }

  close() {
    this.display = "none";
    if (this.parameters.cfunc != null) {
      this.parameters.cfunc.close();
    }
  }

  hasBody(): boolean {
    return this.parameters.iskey('body');
  }

  hasButton(): boolean {
    return this.parameters.iskey('button');
  }

  hasText1(): boolean {
    return this.parameters.iskey('text1');
  }

  hasText2(): boolean {
    return this.parameters.iskey('text2');
  }

  hasTick(): boolean {
    return this.parameters.iskey('tick');
  }
}
