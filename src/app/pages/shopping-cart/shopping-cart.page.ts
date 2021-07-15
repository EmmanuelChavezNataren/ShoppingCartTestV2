import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';

import { ProductsFacade } from '../../../store/facades/products.facade';
import { ShoppingCart } from '../../models/cart.model';
import { UtilitiesService } from '../../services/utilities.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.page.html',
  styleUrls: ['./shopping-cart.page.scss'],
})
export class ShoppingCartPage implements OnInit, OnDestroy {

  sub: Subscription = new Subscription();
  shoppingCart: ShoppingCart;
  isOpenInfoPayment: boolean = true;
  shipping: number = 0;
  discount: number = 0;
  subtotal: number = 0;
  total: number = 0;
  isLoading$: Observable<boolean>;
  isEmptyShoppingCart: boolean = false;


  constructor(
    private productsFacade: ProductsFacade,
    private utilities: UtilitiesService
  ) { }

  ngOnInit() {
    this.sub.add(
      this.productsFacade.shoppingCart$.subscribe(
        cart => {
          this.shoppingCart = cart;
          if (this.shoppingCart?.products.length > 0) {
            this.isEmptyShoppingCart = false;
          }
          this.calculateAmounts();
        }
      )
    );
    this.isLoading$ = this.productsFacade.isLoading$;

    if (this.shoppingCart?.products.length <= 0 || this.utilities.isNull(this.shoppingCart?.products)) {
      this.isEmptyShoppingCart = true;
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  calculateAmounts() {
    this.subtotal = 0;
    this.shipping = 0;
    this.discount = 0;
    this.total = 0;
    this.shoppingCart.products.map((product: Product) => {
      this.subtotal = this.subtotal + +product.product_price;
      if (!this.utilities.isNull(product.discount) && product.discount > 0) {
        this.discount = this.discount + +product.discount;
      }
    });

    const subtotalCalShipping: number = Math.trunc((this.subtotal / 500));
    this.shipping = 25 * subtotalCalShipping;
    this.total = (this.subtotal + this.shipping) - this.discount;
  }

  setIsOpenInfoPayment(isOpenInfoPayment: boolean) {
    this.isOpenInfoPayment = isOpenInfoPayment;
  }

  removeFromShoppingCart(productId: number) {
    this.utilities.showConfirmAlert(
      this.utilities.translate('confirmTitle'),
      this.utilities.translate('confirmMessageDel'),
      this.utilities.translate('buttonOk'),
      this.utilities.translate('buttonCancel'),
      () => {
        this.productsFacade.removeFromShoppingCart(productId);
        this.utilities.showMessage('Producto eliminado correctamente', this.utilities.translate('removeProductFromCart'));
        this.calculateAmounts();
      }
    );
  }
}
