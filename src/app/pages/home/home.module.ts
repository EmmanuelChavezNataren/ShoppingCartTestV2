import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsEffect } from 'src/store/effects/products.effects';
import { UserEffect } from 'src/store/effects/user.effects';
import { ProductsFacade } from 'src/store/facades/products.facade';
import * as fromProducts from 'src/store/reducers/products.reducer';
import * as fromUser from 'src/store/reducers/user.reducer';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PipesModule,
    TranslateModule,
    SharedModule,
    StoreModule.forFeature(fromProducts.featureKey, fromProducts.reducer),
    StoreModule.forFeature(fromUser.featureKey, fromUser.reducer),
    EffectsModule.forFeature([ProductsEffect, UserEffect])
  ],
  providers: [ProductsFacade],
  declarations: [HomePage]
})
export class HomePageModule { }
