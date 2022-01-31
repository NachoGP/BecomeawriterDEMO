import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Parameters } from '../../../libs/cfactory/parameters';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentFactoryService } from 'src/libs/cfactory/componentfactory.service';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'modalcontact',
  templateUrl: './modalcontact.component.html',
  styleUrls: ['./modalcontact.component.scss']
})
export class ModalcontactComponent implements OnInit {

  display: string = 'block';
  parameters: Parameters;
  formContact: FormGroup;
  clientinfo: any;

  constructor(private r: Router, private fb: FormBuilder, private cFactory: ComponentFactoryService, private http: HttpService) { }

  ngOnInit() {
    this.formContact = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      ce: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      message: new FormControl('', Validators.required),
      check: new FormControl('', Validators.required)
    });
  }
  cancel() {
    this.display = 'none';
  }

  close() {
    this.display = 'none';
    if (this.parameters.cfunc != null) {
      this.parameters.cfunc.close();
    }
  }

  sendPack() {
    console.log('Manda email');
    //return this.http.post('http://localhost:3000/formulario')
    let clientinfo = {
      name: this.formContact.value.name,
      surname: this.formContact.value.surname,
      ce: this.formContact.value.ce,
      email: this.formContact.value.email,
      phone: this.formContact.value.phone,
      message: this.formContact.value.message,
      check: this.formContact.value.check
    }
    this.http.sendEmail("http://localhost:3000/formulario", clientinfo).subscribe(
      data => {
        const res: any = data;
        console.log(`${clientinfo.name} ha enviado un email para contacto comercial con Become a Writer Kids!`);
      })
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
