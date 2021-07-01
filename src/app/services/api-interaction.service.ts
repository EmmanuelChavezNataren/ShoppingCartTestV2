import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models/product.model';
import { User } from '../models/user.model';
import { DataService } from './data.service';
import { ResourcesService } from './resources.service';
import { UtilitiesService } from './utilities.service';

@Injectable({
  providedIn: 'root'
})
export class ApiInteractionService {

  constructor(
    private service: DataService,
    private utilities: UtilitiesService) { }


  getUserProfile(): Observable<User> {
    return this.service.doGet(ResourcesService.userProfile).pipe(
      map(response => response['data'])
    );
  }

  getAllProducts(): Observable<Product[]> {
    return this.service.doGet(ResourcesService.allProducts).pipe(
      map(response => response['data'])
    );
  }
}
