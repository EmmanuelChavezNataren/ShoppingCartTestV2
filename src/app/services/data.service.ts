import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



/**
 * Clase que obtiene la l&oacute;gica para consumir los m&eacute;todos http
 * @author Emmanuel Ch&aacute;vez
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  /**
 * M&eacute;todo que obtiene las cabeceras para las peticiones de los metodos http
 * @returns HttpHeaders Object
 */
  private getDefaultHeaders(): HttpHeaders {
    let headerJson = {
      'Acces-Control-Allow-Origin': '*',
      'Acces-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, HEAD',
      'Acces-Control-Allow-Headers': 'Content-Type, Authorization'
    };
    let httpHeaders = new HttpHeaders(headerJson);
    return httpHeaders;
  }

  /**
   * M&eacute;todo que concatena la URL del host con el path del servicio a consumir
   * @param path Ruta del servicio web a consultar
   * @returns Ruta final del servicio web
   */
  private buildCompletePath(path: string): string {
    return `${environment.apiUrl}${path}`;
  }

  /** 
   * M&eacute;todo para realizar una petici&oacute;n http/get al servicio rest
   * @param resourcePath direcci&oacute;n url del servicio a invocar, sin host, contextpath ni puerto.
   * @param filterObject objeto json con los datos que se usar&aacute;n para filtrar los registros.
   * @return objeto json con el resultado de la operaci&oacute;n.
   */
  doGet(resourcePath: string, filterObject?: any): Observable<Object> {
    let headers = this.getDefaultHeaders();
    let completPath = this.buildCompletePath(resourcePath);
    return this.http.get(completPath, { headers: headers, params: filterObject });
  }
}
