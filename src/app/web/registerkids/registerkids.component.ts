import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ComponentFactoryService } from 'src/libs/cfactory/componentfactory.service';
import { Parameters } from 'src/libs/cfactory/parameters';
import { UserService } from '../../services/user.service';
import { passValidator } from './registerkids.validators';


@Component({
  selector: 'app-registerkids',
  templateUrl: './registerkids.component.html',
  styleUrls: ['./registerkids.component.scss']
})
export class RegisterkidsComponent implements OnInit {
  @ViewChild('successRegister', { read: ViewContainerRef, static: true }) modalRef: ViewContainerRef;
  dataResult: true;
  parameters: Parameters;
  formRegister: FormGroup;
  userinfo: any;
  constructor(
    private router: Router,
    private usuarioService: UserService,
    private fb: FormBuilder,
    private cFactory: ComponentFactoryService) { }

  ngOnInit() {

    this.formRegister = this.fb.group({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      password2: new FormControl('', [Validators.minLength(6), Validators.required, passValidator]),
      city: new FormControl('', Validators.required),
      ce: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      check: new FormControl('', Validators.required)
    });
    this.formRegister.controls.password.valueChanges
      .subscribe(
        x => this.formRegister.controls.password2.updateValueAndValidity()
      )
  }
  register() {
    const userinfo = {
      usuario: this.formRegister.value.usuario,
      password: this.formRegister.value.password,
      password2: this.formRegister.value.password2,
      city: this.formRegister.value.city,
      email: this.formRegister.value.email
    }
    this.usuarioService.guardarUsuarioKids(userinfo)
      .then((res) => {
      });

    if (this.dataResult = true) {
      this.cFactory.insert(this.modalRef, ModalComponent, {
        title: 'Become a Writer Kids',
        tick: '',
        text1: 'Gracias por registrarse en Become a Writer',
        text2: '¡Nos pondremos en contacto en breve!',
        button: 'Salir'
      },
        {
          close: this.continuar
        });
    }
    else {
      this.cFactory.insert(this.modalRef, ModalComponent, {
        title: 'Lo sentimos!',
        body: 'Ha ocurrido un error al registrar su usuario.',
        button: 'Salir'
      })
    }
  }
  continuar = () => {
    this.router.navigate(['/']);
  }
}