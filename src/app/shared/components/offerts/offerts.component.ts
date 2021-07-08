import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductsFacade } from 'src/store/facades/products.facade';


@Component({
  selector: 'app-offerts',
  templateUrl: './offerts.component.html',
  styleUrls: ['./offerts.component.scss'],
})
export class OffertsComponent implements OnInit, OnDestroy {

  @ViewChild('slideNav', { static: false }) slideNav: IonSlides;
  slideOps = {
    initialSlide: 1,
    slidesPerView: 1.6,
    loop: true,
    centeredSlides: true,
    spaceBetween: 5
  };

  discountedProducts: Product[];
  subs: Subscription = new Subscription();
  isLoading$: Observable<boolean>;

  constructor(
    private productsFacade: ProductsFacade
  ) { }

  ngOnInit() {
    this.subs.add(
      this.productsFacade.products$.subscribe(
        products => {
          this.discountedProducts = products.filter(product => +product.discount > 0);
        }
      )
    );

    this.isLoading$ = this.productsFacade.isLoading$;

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getDiscountPrice(productPrice: number, discount: number): number {
    return (productPrice - discount);
  }


}
