import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  // grafica 1
  getNumberStories(): Observable<HttpResponse<object>> {
    return this.http.get<object>(environment.mocksEndpoints.NumberStories,
      { withCredentials: true, observe: 'response' });
    }

    // gráfica 2
  getCorrectedStories(): Observable<HttpResponse<object>> {
    return this.http.get<object>(environment.mocksEndpoints.dashboardInfo,
      { withCredentials: true, observe: 'response' });
    }

    // boxcard 1
    getDataCard1():Observable<HttpResponse<object>> {
      return this.http.get<object>(environment.mocksEndpoints.cardbox1,
        { withCredentials: true, observe: 'response' });
    }

    // gráfica 4 (génros- Tipo rose)

    getDataChart4(): Observable<HttpResponse<object>> {
      return this.http.get<object>(environment.mocksEndpoints.chart4mock,
        { withCredentials: true, observe: 'response' });
    }

    //grafica 5 - Barras Basic

    getDataChart5(): Observable<HttpResponse<object>> {
      return this.http.get<object>(environment.mocksEndpoints.chart5mock,
        {withCredentials: true, observe: 'response'})
    }



    /** Method that obtain dashboard Info */

  // getDashboardData(): Observable < HttpResponse < object >> {
  //   // return this.http.get<object>(environment.endpoints.dashboardInfo,
  //   return this.http.get<object>(environment.mocksEndpoints.dashboardInfo,
  //     { withCredentials: true, observe: 'response' });
  // }

}
