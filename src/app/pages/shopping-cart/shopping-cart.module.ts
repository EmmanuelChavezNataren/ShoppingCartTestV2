import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { ProductsEffect } from 'src/store/effects/products.effects';
import * as fromProducts from 'src/store/reducers/products.reducer';

import { ShoppingCartPageRoutingModule } from './shopping-cart-routing.module';
import { ShoppingCartPage } from './shopping-cart.page';
import { ProductsFacade } from '../../../store/facades/products.facade';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShoppingCartPageRoutingModule,
    TranslateModule,
    StoreModule.forFeature(fromProducts.featureKey, fromProducts.reducer),
    EffectsModule.forFeature([ProductsEffect])
  ],
  providers: [ProductsFacade],
  declarations: [ShoppingCartPage]
})
export class ShoppingCartPageModule { }
