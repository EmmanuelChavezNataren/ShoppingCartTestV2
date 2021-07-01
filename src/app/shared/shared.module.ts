import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { ProductsListComponent } from './components/products-list/products-list.component';
import { LogoHeaderComponent } from './logo-header/logo-header.component';



@NgModule({
  declarations: [
    LogoHeaderComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    TranslateModule,
  ],
  exports: [
    LogoHeaderComponent,
    ProductsListComponent,
  ]
})
export class SharedModule { }
