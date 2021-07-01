import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../../models/product.model';
import { AppState } from '../../../../store/app.reducer';
import * as actions from '../../../../store/actions';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @Input() products: Product[];

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('products').subscribe(
      ({ products }) => {          
       this.products = products.filter(( product ) => {
         return product.is_favorite === true;
       });
       });
    this.store.dispatch(actions.loadAllProducts());
  }

}
