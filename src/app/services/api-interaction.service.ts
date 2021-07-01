import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { UtilitiesService } from './utilities.service';
import { ResourcesService } from './resources.service';
import { map, tap } from 'rxjs/operators'
import { GeneralResponse } from '../models/general-response.model';
import { UserInfo } from 'os';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

/**
 * Clase para concentrar la interacci&oacute;n con los endpoints
 * @author Emmanuel Ch&aacute;vez
 */
@Injectable({
  providedIn: 'root'
})
export class ApiInteractionService {

  constructor(
    private service: DataService,
    private utilities: UtilitiesService) { }


  /**
* M&eacute;todo que obtienene la informaci&oacute;n del perfil de usuario mediante una API.
* @returns Regresa un Observable con el objeto del perfil del usuario
*/
  getUserProfile(): Observable<User> {
    return this.service.doGet(ResourcesService.userProfile).pipe(
        map(response  => response['data'])
      );
  }

  /**
   * M&eacute;todo que obtienene la informaci&oacute;n de todos los productos mediante una API.
   * @returns Regresa un Observable con el array de los Productos
   */
  getAllProducts(): Observable<Product[]>{
    return this.service.doGet(ResourcesService.allProducts).pipe(
      map( response => response['data'])
    );    
  }
}
