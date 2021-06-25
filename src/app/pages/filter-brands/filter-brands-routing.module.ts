import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterBrandsPage } from './filter-brands.page';

const routes: Routes = [
  {
    path: '',
    component: FilterBrandsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterBrandsPageRoutingModule {}
