import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { StorageEnum } from 'src/app/models/enums/storage.enum';

import * as fromAuth from '../../../store/actions/auth.actions';
import { AppState } from '../../../store/app.reducer';
import { AppComponent } from '../../app.component';
import { User } from '../../models/user.model';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userProfile: User = null;

  constructor(
    private appComponent: AppComponent,
    private utilities: UtilitiesService,
    private router: Router,
    private store: Store<AppState>) {
  }


  ngOnInit() {
    this.es();
  }

  async ionViewDidEnter() {
    localStorage.setItem(StorageEnum.TOKEN_LOGIN, 'false');
    await this.utilities.showLoader();
    this.store.select('auth').subscribe(
      ({ user }) => {
        this.userProfile = user;
        this.utilities.hideLoader();
      });

    this.store.dispatch(fromAuth.loadUser());

  }


  es() {
    localStorage.setItem(StorageEnum.LANGUAGE_TXT, "English");
    this.appComponent.initTranslate('es');
  }

  en() {
    localStorage.setItem(StorageEnum.LANGUAGE_TXT, "Español");
    this.appComponent.initTranslate('en');
  }

  login() {
    localStorage.setItem(StorageEnum.TOKEN_LOGIN, 'true');
    this.utilities.showLoader();
    this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }

  loginInvited() {

  }

}
