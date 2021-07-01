import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilterBrandsPageRoutingModule } from './filter-brands-routing.module';

import { FilterBrandsPage } from './filter-brands.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilterBrandsPageRoutingModule,
    SharedModule
  ],
  declarations: [FilterBrandsPage]
})
export class FilterBrandsPageModule {}
