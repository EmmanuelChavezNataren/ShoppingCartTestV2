import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../../../models/product.model';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];
  @Input() isLoading: Observable<boolean>;
  @Input() isDiscover: boolean;

  constructor() { }

  ngOnInit() {
  }


}
