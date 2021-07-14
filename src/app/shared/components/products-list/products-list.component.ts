import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  @Input() isLoading: boolean;
  @Input() isDiscover: boolean;

  @Output()
  setIsFavorite = new EventEmitter<{ productId: number, isFavorite: boolean }>();

  @Output()
  addToCart = new EventEmitter<Product>();

  isOpenAddCartList: Array<boolean> = new Array<boolean>(true);

  constructor() { }

  ngOnInit() {
  }

  setIsOpenAddCartList(productIndex: number, isOpen: boolean) {
    this.isOpenAddCartList[productIndex] = isOpen;
  }

  setProductIsFavorite(productId: number, productIndex: number, isFavorite: boolean) {
    this.setIsFavorite.emit({ productId, isFavorite });
    if (this.isOpenAddCartList[productIndex]) {
      this.setIsOpenAddCartList(productIndex, false);
    }
  }

  addProductToCart(product: Product, productIndex: number) {
    this.addToCart.emit(product);
    this.setIsOpenAddCartList(productIndex, false);
  }
}
