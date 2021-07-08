import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageItems } from 'src/app/models/enums/storage.enum';
import { User } from 'src/app/models/user.model';
import { StorageService } from 'src/app/services/storage.service';




@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  userProfile: User;
  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  async ngOnInit() {
    this.userProfile = await this.storage.getObject(StorageItems.userInfo);
  }

  logout() {
    this.router.navigateByUrl('/login', { replaceUrl: true });
  }

  goToFavorites() {

    this.router.navigateByUrl('/profile/favorites', { replaceUrl: true });
  }

}
