import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as actions from '../../../store/actions';
import { AppState } from '../../../store/app.reducer';
import { User } from '../../models/user.model';
import { UtilitiesService } from '../../services/utilities.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userProfile: User;
  constructor(
    private utilities: UtilitiesService,
    private store: Store<AppState>,

  ) {
  }

  ngOnInit() {
    this.utilities.hideLoader();
    this.store.select('auth').subscribe(
      ({ user }) => {
        this.userProfile = user;
        this.utilities.hideLoader();
      });

    this.store.dispatch(actions.loadAllProducts());


  }

}
