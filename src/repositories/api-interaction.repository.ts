import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../app/models/product.model';
import { User } from '../app/models/user.model';
import { ResourcesService } from '../app/services/resources.service';
import { IRepository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class ApiInteractionService extends IRepository {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getUserProfile(): Observable<User> {
    return this.doGet(ResourcesService.userProfile).pipe(
      map(response => response)
    );
  }

  getAllProducts(): Observable<Product[]> {
    return this.doGet(ResourcesService.allProducts).pipe(
      map(response => response)
    );
  }
}
