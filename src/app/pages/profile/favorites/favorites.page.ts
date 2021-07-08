import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { StorageService } from 'src/app/services/storage.service';
import { ProductsFacade } from 'src/store/facades/products.facade';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit, OnDestroy {
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
            allProducts => allProducts.is_favorite
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
