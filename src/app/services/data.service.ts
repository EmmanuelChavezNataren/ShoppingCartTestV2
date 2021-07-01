import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  private getDefaultHeaders(): HttpHeaders {
    let headerJson = {
      'Acces-Control-Allow-Origin': '*',
      'Acces-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, HEAD',
      'Acces-Control-Allow-Headers': 'Content-Type, Authorization'
    };
    let httpHeaders = new HttpHeaders(headerJson);
    return httpHeaders;
  }


  private buildCompletePath(path: string): string {
    return `${environment.apiUrl}${path}`;
  }


  doGet(resourcePath: string, filterObject?: any): Observable<Object> {
    let headers = this.getDefaultHeaders();
    let completPath = this.buildCompletePath(resourcePath);
    return this.http.get(completPath, { headers: headers, params: filterObject });
  }
}
