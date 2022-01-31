import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipsService {

  constructor(private http: HttpClient) { }

  mostrarTips() {
    let url = 'http://localhost:3000/api/tips';
    return this.http.get(url).toPromise();
  }

  mostrarTipsKids() {
    let url = 'http://localhost:3000/api/tipskids';
    return this.http.get(url).toPromise();
  }

  verTip(id) {
    let url = 'http://localhost:3000/tip-read/' + id;
    return this.http.get(url).toPromise();
  }

  verTipKids(id) {
    let url = 'http://localhost:3000/api/tip-readkids/' + id;
    return this.http.get(url).toPromise();
  }

}
