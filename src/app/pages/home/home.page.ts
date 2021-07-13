import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StorageItems } from 'src/app/models/enums/storage.enum';

import { ProductsFacade } from '../../../store/facades/products.facade';
import { ShoppingCart } from '../../models/cart.model';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';
import { StorageService } from '../../services/storage.service';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userProfile: User;
  subs: Subscription = new Subscription();
  isLoading$: Observable<boolean>;
  allProducts: Product[];
  shoppingCart: ShoppingCart;
  shoppingCartLength: number = 0;


  constructor(
    private productsFacade: ProductsFacade,
    private storage: StorageService,
    private utilities: UtilitiesService
  ) {
  }

  async ngOnInit() {
    this.userProfile = await this.storage.getObject(StorageItems.userInfo);
    this.productsFacade.getAllProducts();
    this.productsFacade.getShoppingCart();
    this.subs.add(
      this.productsFacade.products$.subscribe(
        products => {
          this.allProducts = products;
        }));

    this.subs.add(
      this.productsFacade.shoppingCart$.subscribe(
        cart => {
          this.shoppingCart = cart;
          this.shoppingCartLength = this.shoppingCart.products.length;
        }));


    this.isLoading$ = this.productsFacade.isLoading$;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  setIsFavorite(favorite: { productId: number, isFavorite: boolean }) {
    this.productsFacade.setIsFavorite(favorite.productId, favorite.isFavorite);
    if (favorite.isFavorite) {
      this.utilities.showMessage('Producto agregado correctamente', this.utilities.translate('addCartMessage'));
    }
  }

  addToCart(product: Product) {
    this.productsFacade.addToShoppingCart(product);
    this.utilities.showMessage('Producto agregado correctamente', this.utilities.translate('addCartMessage'));
  }

}
