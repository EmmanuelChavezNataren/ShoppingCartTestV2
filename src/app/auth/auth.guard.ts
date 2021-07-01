import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';

import { StorageEnum } from '../models/enums/storage.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router: Router) { }

  async canLoad(): Promise<boolean> {
    const isLogin = localStorage.getItem(StorageEnum.TOKEN_LOGIN);
    if (isLogin && (isLogin === 'true')) {
      return true;
    } else {
      this.router.navigateByUrl('/login', { replaceUrl: true });
      return true;
    }
  }
}
