import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { ProductsEffect } from '../../../store/effects/products.effects';
import * as fromProducts from '../../../store/reducers/products.reducer';
import * as fromUser from '../../../store/reducers/user.reducer';
import { PipesModule } from '../../pipes/pipes.module';
import { UserEffect } from './../../../store/effects/user.effects';
import { ProductsFacade } from './../../../store/facades/products.facade';
import { SharedModule } from './../../shared/shared.module';
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
