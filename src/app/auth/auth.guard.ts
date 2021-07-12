import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { StorageItems } from 'src/app/models/enums/storage.enum';
import { StorageService } from 'src/app/services/storage.service';



@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  async canLoad(): Promise<boolean> {
    const isLogin = await this.storage.getObject(StorageItems.tokenLogin);
    if (isLogin) {
      return true;
    } else {
      this.router.navigateByUrl('/login', { replaceUrl: true });
      return false;
    }
  }
}
