import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';

import { ProductsFacade } from '../../../store/facades/products.facade';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {
  subs: Subscription = new Subscription();
  product: Product;
  colorSelectedIndex = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsFacade: ProductsFacade,
    private utilities: UtilitiesService
  ) { }

  ngOnInit() {
    this.subs.add(
      this.activatedRoute.queryParams.subscribe(
        () => {
          this.product = this.router.getCurrentNavigation().extras.state?.selectedProduct;
        }
      )
    );
  }

  setProductIsFavorite(productId: number, isFavorite: boolean) {
    this.productsFacade.setIsFavorite(productId, isFavorite);
    this.productsFacade.products$.subscribe(
      product => {
        this.product = product.find(prod => prod.id === this.product.id);
      }
    );
  }

  addProductToCart(product: Product) {
    const cartProduct = { ...product, color: product.colors[this.colorSelectedIndex] };
    delete cartProduct.colors;
    this.productsFacade.addToShoppingCart(cartProduct);
    this.utilities.showMessage('Producto agregado correctamente', this.utilities.translate('addCartMessage'));
  }

  onChangeColor(colorSelectedIndex: number) {
    this.colorSelectedIndex = colorSelectedIndex;
  }

}
