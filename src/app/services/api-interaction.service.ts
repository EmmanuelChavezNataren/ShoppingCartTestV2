import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { UtilitiesService } from './utilities.service';
import { ResourcesService } from './resources.service';
import { map } from 'rxjs/operators'
import { GeneralResponse } from '../models/general-response.model';
import { UserInfo } from 'os';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiInteractionService {

  constructor(
    private service: DataService,
    private utilities: UtilitiesService) { }


  /**
* M&eacute;todo que obtienene la informaci&oaute;n del perfil de usuario mediante una API.
* @returns Regresa una promesa con el objeto del perfil del usuario
*/
  getUserProfile(): Observable<User> {
    return this.service.doGet(ResourcesService.userProfile)
      .pipe(
        map(response  => response['data'])
      );
  }
}
