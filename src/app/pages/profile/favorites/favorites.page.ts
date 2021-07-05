import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ProductsFacade } from '../../../../store/facades/products.facade';
import { Product } from '../../../models/product.model';
import { StorageService } from '../../../services/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  allFavoriteProducts: Product[] = [];
  subs: Subscription = new Subscription();
  isLoading$: Observable<boolean>;

  constructor(
    private storage: StorageService,
    private productsFacade: ProductsFacade
  ) { }

  ngOnInit() {
    this.subs.add(
      this.productsFacade.products$.subscribe(
        products => {
          this.allFavoriteProducts = products.filter(
            allProducts => {
              return allProducts.is_favorite;
            }
          );
        }
      )
    );
    this.isLoading$ = this.productsFacade.isLoading$;

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
