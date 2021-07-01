import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '../../../models/product.model';
import { AppState } from '../../../../store/app.reducer';
import * as actions from '../../../../store/actions';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  allFavoriteProducts: Product[] = []; 
  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.store.select('products').subscribe(
      ({ products }) => {          
       this.allFavoriteProducts = products.filter(( product ) => {
         return product.is_favorite === true;
       });
       console.log('Favorite Products', this.allFavoriteProducts);       
       });

  }

}
