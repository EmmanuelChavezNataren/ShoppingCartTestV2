import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { StorageItems } from 'src/app/models/enums/storage.enum';
import { User } from 'src/app/models/user.model';
import { StorageService } from 'src/app/services/storage.service';
import { UserFacade } from 'src/store/facades/user.facade';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  isLoading$: Observable<boolean>;

  userProfile: User;
  subs: Subscription = new Subscription();

  constructor(
    private appComponent: AppComponent,
    private router: Router,
    private userFacade: UserFacade,
    private storage: StorageService
  ) {
  }


  ngOnInit() {
    this.es();
  }

  async ionViewDidEnter() {
    this.storage.set(StorageItems.tokenLogin, false);
    this.subs.add(
      this.userFacade.user$.subscribe(res => {
        this.userProfile = res;
        this.storage.set(StorageItems.userInfo, JSON.stringify(this.userProfile));
      })
    );
    this.isLoading$ = this.userFacade.isLoading$;
    this.userFacade.loadUser();

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }


  es() {
    this.storage.set(StorageItems.languageTxt, 'English');
    this.appComponent.initTranslate('es');
  }

  en() {
    this.storage.set(StorageItems.languageTxt, 'Español');
    this.appComponent.initTranslate('en');
  }

  login() {
    this.storage.set(StorageItems.tokenLogin, true);
    this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }

  loginInvited() {

  }

}
