import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StorageItems } from 'src/app/models/enums/storage.enum';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { StorageService } from 'src/app/services/storage.service';
import { ProductsFacade } from 'src/store/facades/products.facade';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy {

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
