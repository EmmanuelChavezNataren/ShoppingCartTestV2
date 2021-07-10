import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartBadgeComponent } from './cart-badge.component';

const routes: Routes = [
  {
    path: '',
    component: CartBadgeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartBadgeComponentRoutingModule {}
