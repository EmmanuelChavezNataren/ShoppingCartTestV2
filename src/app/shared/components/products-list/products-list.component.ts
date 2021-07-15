import { Component, Input, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

import { UtilitiesService } from '../../../services/utilities.service';



@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  @Input() isLoading: boolean;
  @Input() isDiscover: boolean;

  constructor(
    private router: Router,
    ) { }

  ngOnInit() {
  }

  getProductDetail(product: Product) {
    const navigationExtras: NavigationExtras = {
      state: {
        selectedProduct: product
      }
    };

    this.router.navigate(['product-detail'], navigationExtras);
  }

}
