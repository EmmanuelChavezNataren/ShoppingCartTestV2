import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { CartBadgeComponentRoutingModule } from './cart-badge/cart-badge-routing.module';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { OffertsComponent } from './components/offerts/offerts.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';



@NgModule({
  declarations: [
    LogoHeaderComponent,
    ProductsListComponent,
    OffertsComponent,
    CartBadgeComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
    FormsModule,
    CartBadgeComponentRoutingModule
  ],
  exports: [
    LogoHeaderComponent,
    ProductsListComponent,
    OffertsComponent,
    CartBadgeComponent
  ]
})
export class SharedModule { }
