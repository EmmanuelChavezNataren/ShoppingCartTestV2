import { Injectable } from '@angular/core';
import { CanLoad, Router} from '@angular/router';
import { StorageEnum } from 'src/app/models/enums/storage.enum';

@Injectable({
  providedIn: 'root'
})
export class TutorialGuard implements CanLoad {

  constructor(private router: Router){}

   async canLoad(): Promise<boolean> {     
    const hasSeenTutorial = localStorage.getItem(StorageEnum.TUTORIAL_KEY);
    console.log('CanLoad: ', hasSeenTutorial);

    if(hasSeenTutorial && (hasSeenTutorial === 'true')){
      console.log('hasSeenTutorial true');      
      return true;
    }else{
      console.log('hasSeenTutorial false');
      this.router.navigateByUrl('/tutorial', { replaceUrl: true });
      return true;
    }
  }
  
}
