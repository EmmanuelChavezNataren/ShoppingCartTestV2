import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StorageItems } from 'src/app/models/enums/storage.enum';

import { ProductsFacade } from '../../../store/facades/products.facade';
import { Product } from '../../models/product.model';
import { User } from '../../models/user.model';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userProfile: User;
  subs: Subscription = new Subscription();
  isLoading$: Observable<boolean>;
  allProducts: Product[];


  constructor(
    private productsFacade: ProductsFacade,
    private storage: StorageService

  ) {
  }

  async ngOnInit() {
    this.userProfile = await this.storage.getObject(StorageItems.userInfo);
    this.productsFacade.getAllProducts();
    this.subs.add(
      this.productsFacade.products$.subscribe(
        products => {
          this.allProducts = products;
        }));
    this.isLoading$ = this.productsFacade.isLoading$;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
