import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as moment from 'moment';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class RelatoservicesService {

  public dataRow: any;

  constructor(private http: HttpClient) { }

  pedirRelatosbyDate():any {
    const url = 'http://localhost:3000/api/relato/show/bydate';
    return this.http.get(url).toPromise();
  }

  pedirRelatosbyDateKids() {
    const url = 'http://localhost:3000/api/relato/show/bydatekids';
    return this.http.get(url).toPromise();
  }

  todosRelatos(id): any {
    const url = 'http://localhost:3000/api/relato/autor/' + id;

    return this.http.get(url).toPromise();
  }
/** service to get data detail of short story */
todosRelatosMat(id: string): any {

  const url = 'http://localhost:3000/api/relato/autor/' + id
    return this.http.get(_.replace(url, ':id', id),
    { params: {}, withCredentials: false, observe: 'response' });
}

// relatosReto5Cat(id: string): any {
//   const url ="" + id
// }





  todosRelatosCat5(id) {
    const url = 'http://localhost:3000/api/relato/autor5cat/' + id;
    return this.http.get(url).toPromise();
  }
  todosRelatosCat15(id) {
    const url = 'http://localhost:3000/api/relato/autor15cat/' + id;
    return this.http.get(url).toPromise();
  }
  todosRelatosCatNoLimit(id) {
    const url = 'http://localhost:3000/api/relato/autorNoLimitcat/' + id;
    return this.http.get(url).toPromise();
  }

  todosRelatosKids(id) {
    const url = 'http://localhost:3000/api/relatokids/autor/' + id;
    return this.http.get(url).toPromise();
  }

  todosRelatosAutorKids(id) {
    const url = 'http://localhost:3000/api/relato/autorkids/' + id;
    return this.http.get(url).toPromise();
  }

  pedirunRelato(id) {
    const url = 'http://localhost:3000/api/relato/readstory/' + id;
    return this.http.get(url).toPromise();
  }

  pedirunRelatoKids(id) {
    const url = 'http://localhost:3000/api/relato/readstorykids/' + id;
    return this.http.get(url).toPromise();
  }

  mostrarRelatosporUsuario(id) {
    const url = 'http://localhost:3000/api/relato/readstory/' + id + '/totals';
    return this.http.get(url).toPromise();
  }

  mostrarRelatosporUsuarioKids(id) {
    const url = 'http://localhost:3000/api/relato/readstorykids/' + id + '/totals';
    return this.http.get(url).toPromise();
  }

  relatoscat5Id(id) {
    const url = 'http://localhost:3000/api/cat5/' + id;
    return this.http.get(url).toPromise();
  }


  relatoscat5IdKids(id) {
    const url = 'http://localhost:3000/api/cat5kids/' + id;
    return this.http.get(url).toPromise();
  }

  relatoscat15Id(id) {
    const url = 'http://localhost:3000/api/cat15/' + id;
    return this.http.get(url).toPromise();
  }

  relatoscat15IdKids(id) {
    const url = 'http://localhost:3000/api/cat15kids/' + id;
    return this.http.get(url).toPromise();
  }

  relatoscatnoId(id) {
    const url = 'http://localhost:3000/api/catno/' + id;
    return this.http.get(url).toPromise();
  }

  relatoscatnoIdKids(id) {
    const url = 'http://localhost:3000/api/catnokids/' + id;
    return this.http.get(url).toPromise();
  }

  nrelatosTotal() {
    const url = 'http://localhost:3000/api/totalrelatos';
    return this.http.get(url).toPromise();
  }

  nrelatosTotalKids() {
    const url = 'http://localhost:3000/api/totalrelatoskids';
    return this.http.get(url).toPromise();
  }

  nTotalrelatoscat5() {
    const url = 'http://localhost:3000/api/totalcat5';
    return this.http.get(url).toPromise();
  }

  nTotalrelatoscat5Kids() {
    const url = 'http://localhost:3000/api/totalcat5kids';
    return this.http.get(url).toPromise();
  }

  nTotalrelatoscat15() {
    const url = 'http://localhost:3000/api/totalcat15';
    return this.http.get(url).toPromise();
  }

  nTotalrelatoscat15Kids() {
    const url = 'http://localhost:3000/api/totalcat15kids';
    return this.http.get(url).toPromise();
  }

  nTotalrelatoscatilimitada() {
    const url = 'http://localhost:3000/api/totalcatilim';
    return this.http.get(url).toPromise();
  }

  nTotalrelatoscatilimitadaKids() {
    const url = 'http://localhost:3000/api/totalcatilimkids';
    return this.http.get(url).toPromise();
  }

  pedirPropuesta1() {
    const url = 'http://localhost:3000/api/propuestas/prop1rand';
    return this.http.get(url).toPromise();
  }
  
  pedirPropuesta2() {
    const url = 'http://localhost:3000/api/propuestas/prop2rand';
    return this.http.get(url).toPromise();
  }


  // propuestapro(){
  //   const url ='http://localhost:3000/api/propuestas/pro';
  //   return this.http.get(url).toPromise();
  // }

  pedirPropuestaPro():any{
    const url = 'http://localhost:3000/api/propuestas/pro';
    return this.http.get(url,
      { params: {}, withCredentials: false, observe: 'response' });
  }
/** service to get data detail of ticket */
// todosRelatosMat(id: string): any {

//   const url = 'http://localhost:3000/api/relato/autor/' + id
//     return this.http.get(_.replace(url, ':id', id),
//     { params: {}, withCredentials: false, observe: 'response' });
// }



  
    pedirPropuesta1Kids() {
      const url = 'http://localhost:3000/api/propuestas/prop1randkids';
      return this.http.get(url).toPromise();
    }

  pedirPropuesta2Kids() {
    const url = 'http://localhost:3000/api/propuestas/prop2randkids';
    return this.http.get(url).toPromise();
  }

  guardarRelato(relatoinfo: any) {
    console.log(relatoinfo);
    const url = 'http://localhost:3000/api/relato/readstory/create';
    return this.http.post(url, {
      titulo: relatoinfo.titulo,
      categoria: relatoinfo.tiempo,
      relato: relatoinfo.relato,
      fecha: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      usuario_id: relatoinfo.usuario_id,
      propuesta: JSON.stringify(relatoinfo.propuesta)
    }).toPromise();
  }
  guardarRelatoPro(relatoinfo: any) {
    console.log(relatoinfo);
    const url = 'http://localhost:3000/api/relato/readstory/create';
    return this.http.post(url, {
      titulo: relatoinfo.titulo,
      categoria: 'Pro',
      relato: relatoinfo.relato,
      fecha: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      usuario_id: relatoinfo.usuario_id,
      reto: relatoinfo.reto,
      propuesta: JSON.stringify(relatoinfo.propuesta)
    }).toPromise();
  }

  guardarRelatoKids(relatoinfo: any) {
    console.log(relatoinfo);
    const url = 'http://localhost:3000/api/relato/readstory/createkids';
    return this.http.post(url, {
      titulo: relatoinfo.titulo,
      categoria: relatoinfo.tiempo,
      relato: relatoinfo.relato,
      fecha: moment(new Date()).format("YYYY-MM-DD HH:mm:ss"),
      usuariokids_id: relatoinfo.usuariokids_id,
      propuesta: JSON.stringify(relatoinfo.propuesta)
    }).toPromise();
  }

  public borrarRelato(id: any): any {
    const url = 'http://localhost:3000/api/delete/relato/' + id;
    return this.http.delete(_.replace(url, ':id', id),
    { params: {}, withCredentials: false, observe: 'response' });
  }

  borrarRelatoKids(id: any) {
    const url = 'http://localhost:3000/api/delete/relatokids/' + id;
    return this.http.delete(url).subscribe(res =>
      console.log(res));
  }

  public setDataRow(row: any) {
    this.dataRow = row;
  }

  public getDataRow(): any {
    return this.dataRow;
  }


}
