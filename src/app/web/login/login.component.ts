import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  target: any;
  preventDefault: any;
  password: any;
  usuario: any;
  error: any;
  id: any;

  constructor(
    private router: Router,
    private user: UserService,
    private toastr: ToastrService) { }

  ngOnInit() {

    this.form = new FormGroup({
      usuario: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),

    })

  }
  onSubmit(value: any) {


    this.user.accesoUsuario(value)
      .then((res) => {
         console.log(res)
        this.usuario = res;
        //let idguardar = localStorage.setItem('id', this.usuario.id);

        if (this.usuario.error === 'Fallo de usuario y/o contraseña') {
          this.router.navigate(['/login']);
          this.toastr.error('Usuario y/o contraseña incorrectos.', 'ERROR',
            {
              toastClass: 'ngx-toastr error-toast'
            });
            return
        }
        if (this.usuario.role === 'admin') {
          localStorage.setItem('usuario', this.usuario.usuario);
          this.router.navigate(['/adminsenior', this.usuario.id]);
        }
        else if (this.usuario.error === 'fallo de usuario y/o contraseña') {
          this.router.navigate(['/login']);
          this.toastr.error('Usuario y/o contraseña incorrectos.', 'ERROR',
            {
              toastClass: 'ngx-toastr error-toast'
            });
            return
        }
        else {
          this.router.navigate(['/newprofile', this.usuario.id]);
          localStorage.setItem('usuario', this.usuario.usuario);
          localStorage.setItem('id', this.usuario.id);
        }

      });

  }
}
