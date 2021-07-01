import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../../../shared/shared.module';
import { FavoritesPageRoutingModule } from './favorites-routing.module';
import { FavoritesPage } from './favorites.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule,
    TranslateModule,
    SharedModule
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule { }
