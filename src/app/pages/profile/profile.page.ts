import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { AppState } from '../../../store/app.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userProfile: User;
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.select('auth').subscribe(
      ({ user }) => {          
       this.userProfile = user;
       console.log('UserProfile ', this.userProfile);
       });  
  }

  logout(){
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  goToFavorites(){

    this.router.navigateByUrl('/profile/favorites',{ replaceUrl: true});
  }

}
