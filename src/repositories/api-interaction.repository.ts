import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShoppingCart } from 'src/app/models/cart.model';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

import { IRepository } from './repository';


@Injectable({
  providedIn: 'root'
})
export class ApiInteractionService extends IRepository {

  constructor(protected http: HttpClient) {
    super(http);
  }

  getUserProfile(): Observable<User> {
    return this.doGet(environment.userProfileUrl).pipe(
      map(response => response)
    );
  }

  getAllProducts(): Observable<Product[]> {
    return this.doGet(environment.allProductsUrl).pipe(
      map(response => response)
    );
  }

  getShoppingCart(): Observable<ShoppingCart> {
    return this.doGet(environment.shoppingCartUrl).pipe(
      map(response => response)
    );
  }

}
