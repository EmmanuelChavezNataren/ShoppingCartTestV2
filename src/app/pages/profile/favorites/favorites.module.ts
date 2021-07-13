import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsEffect } from 'src/store/effects/products.effects';
import { ProductsFacade } from 'src/store/facades/products.facade';
import * as fromProducts from 'src/store/reducers/products.reducer';

import { FavoritesPageRoutingModule } from './favorites-routing.module';
import { FavoritesPage } from './favorites.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    TranslateModule,
    SharedModule,
    StoreModule.forFeature(fromProducts.featureKey, fromProducts.reducer),
    EffectsModule.forFeature([ProductsEffect])
  ],
  providers: [ProductsFacade],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule { }
