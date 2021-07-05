import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { StorageItems } from 'src/app/models/enums/storage.enum';

import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanLoad {

  constructor(
    private router: Router,
    private storage: StorageService
  ) { }

  async canLoad(): Promise<boolean> {
    const hasSeenTutorial = await this.storage.get(StorageItems.tutorialKey);

    if (hasSeenTutorial && (hasSeenTutorial === 'true')) {
      return true;
    } else {
      this.router.navigateByUrl('/tutorial', { replaceUrl: true });
      return true;
    }
  }

}
