import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-loginkids',
  templateUrl: './loginkids.component.html',
  styleUrls: ['./loginkids.component.scss']
})
export class LoginkidsComponent implements OnInit {

  formLogin: FormGroup;
  target: any;
  preventDefault: any;
  password: any;
  usuario: any;
  error: any;
  id: any;
  useraccess: any;

  constructor(private router: Router, private usuarioService: UserService) { }

  ngOnInit() {

    this.formLogin = new FormGroup({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    });

  }
  onSubmit(value: any) {

    this.usuarioService.accesoUsuarioKids(value)
      .then((res) => {
        this.usuario = res;
        // let idguardar = localStorage.setItem('id', this.usuario.id);
        if (this.usuario.error === 'falloUsuario') {
          alert('Usuario y/o clave incorrectas');
        }
        if (this.usuario.role === 'admin') {
          localStorage.setItem('usuario', this.usuario.usuario);
          this.router.navigate(['/adminteacher', this.usuario.id]);
        }

        else if (this.usuario.error === 'falloPassword') {
          // console.log("Contraseña Incorrecta");
          alert('Usuario y/o clave incorrectas');

          //  else if (this.usuario.usuario = 'Profe' && this.usuario.id === 71){
          //    console.log("entra en el Admin user");
          //    this.router.navigate(['/adminteacher', this.usuario.id]);
          //   return
        } else {
          console.log('Usuario y contraseña correcta');
          // this.router.navigate(['/preLogin'], { replaceUrl: true });

          this.router.navigate(['/newprofilekids', this.usuario.id]);
          let idguardarnombre = localStorage.setItem('usuario', this.usuario.usuario);
          // let idguardar = localStorage.setitem('id', this.usuario.id)
        }
      });
  }
}
