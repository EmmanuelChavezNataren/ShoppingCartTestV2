import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { StorageItems } from '../models/enums/storage.enum';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  async canLoad(): Promise<boolean> {
    const isLogin = await this.storage.get(StorageItems.tokenLogin);
    if (isLogin && (isLogin === 'true')) {
      return true;
    } else {
      this.router.navigateByUrl('/login', { replaceUrl: true });
      return true;
    }
  }
}
