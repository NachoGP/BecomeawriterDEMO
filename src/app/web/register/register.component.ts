import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ComponentFactoryService } from 'src/libs/cfactory/componentfactory.service';
import { Parameters } from 'src/libs/cfactory/parameters';
import { UserService } from '../../services/user.service';
import { passValidator } from './register.validators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @ViewChild('successRegister', { read: ViewContainerRef, static: true }) modalRef: ViewContainerRef;
  dataResult: true;
  parameters: Parameters;
  formRegister: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UserService,
    private cFactory: ComponentFactoryService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {

    this.formRegister = this.fb.group({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      password2: new FormControl('', [Validators.minLength(6), Validators.required, passValidator]),
      city: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      check: new FormControl('', Validators.required)
    });
    this.formRegister.controls.password.valueChanges
      .subscribe(
        x => this.formRegister.controls.password2.updateValueAndValidity()
      );
  }
  OpenNewWindow() {
    window.open('http://localhost:4200/politica', '_blank');
  }

  register(): void {
    const userinfo = {
      usuario: this.formRegister.value.usuario,
      password: this.formRegister.value.password,
      password2: this.formRegister.value.password2,
      city: this.formRegister.value.city,
      email: this.formRegister.value.email
    }

    // tslint:disable-next-line: align
    if (userinfo) {
      console.log('soy userinfo si va OK', userinfo);
      this.usuarioService.guardarUsuario(userinfo);
      this.router.navigate(['/login'])
      this.toastr.success('Registro realizado con éxito.', "GENIAL",
        {
          toastClass: 'ngx-toastr success-toast'
      });
      return;
    }

    else {
      console.log('soy userinfo en Error', userinfo);
      this.toastr.error('no fue posible realizar el registro','ERROR',
        {
          toastClass: 'ngx-toastr error-toast'
        });
      return;
    }

  }
}

//1, paso: Injecto el servicio en el constructor ( private) (elijo el nombre parecido a la clase)
//2. paso: providers. dentro de @component (en este mismo)
//3. paso: Hacer la llamada al método que me interese. 
//4. devuelvo la promesa (then)