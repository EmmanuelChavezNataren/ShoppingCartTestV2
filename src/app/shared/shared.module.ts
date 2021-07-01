import { ProductsListComponent } from './components/products-list/products-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoHeaderComponent } from './logo-header/logo-header.component';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';



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
