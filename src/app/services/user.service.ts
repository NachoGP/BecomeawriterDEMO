import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  relatoURL: '';

  constructor(private http: HttpClient) { }

  guardarUsuario(userinfo) {
    console.log(userinfo);
    const url = 'http://localhost:3000/api/insert/newuser';
    return this.http.post(url, {
      usuario: userinfo.usuario,
      password: userinfo.password,
      password2: userinfo.password2,
      city: userinfo.city,
      email: userinfo.email
    }).toPromise();
  }

  guardarUsuarioKids(userinfo) {
    console.log(userinfo);
    const url = 'http://localhost:3000/api/insert/newuserkids';
    return this.http.post(url, {
      usuario: userinfo.usuario,
      password: userinfo.password,
      password2: userinfo.password2,
      city: userinfo.city,
      ce: userinfo.body.ce,
      email: userinfo.email
    }).toPromise();
  }

  accesoUsuario(useraccess) {

    // console.log(useraccess)
    const url = 'http://localhost:3000/api/usuario/login';

    return this.http.post(url, {
      usuario: useraccess.usuario,
      password: useraccess.password,
      id: useraccess.id
    }).toPromise();
  }

  accesoUsuarioKids(useraccess: any) {

    console.log(useraccess);
    const url = 'http://localhost:3000/api/usuario/loginkids';

    return this.http.post(url, {
      usuario: useraccess.usuario,
      password: useraccess.password,
      id: useraccess.id,
      role: useraccess.role
    }).toPromise();
  }

  ncountryTotal() {
    const url = 'http://localhost:3000/api/usuario/paises';
    // console.log(url)
    return this.http.get(url).toPromise();
  }

  ncountryTotalKids() {
    const url = 'http://localhost:3000/api/usuario/paiseskids';
    // console.log(url)
    return this.http.get(url).toPromise();
  }
}
