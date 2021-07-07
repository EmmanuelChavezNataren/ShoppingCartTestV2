import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { OffertsComponent } from './components/offerts/offerts.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';



@NgModule({
  declarations: [
    LogoHeaderComponent,
    ProductsListComponent,
    OffertsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    LogoHeaderComponent,
    ProductsListComponent,
    OffertsComponent
  ]
})
export class SharedModule { }
