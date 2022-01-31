import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }


  /** Method that obtain dashboard Info */

  getDashboardData(): Observable < HttpResponse < object >> {
    // return this.http.get<object>(environment.endpoints.dashboardInfo,
    return this.http.get<object>(environment.mocksEndpoints.dashboardInfo,
      { withCredentials: true, observe: 'response' });
  }



}

