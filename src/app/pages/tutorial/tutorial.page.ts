import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageEnum } from 'src/app/models/enums/storage.enum';

import { AppComponent } from '../../app.component';
import { UtilitiesService } from '../../services/utilities.service';


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage implements OnInit {

  constructor(
    private appComponent: AppComponent,
    private utilities: UtilitiesService,
    private router: Router) { }

  ngOnInit() {
    this.es();
  }


  es() {
    localStorage.setItem(StorageEnum.LANGUAGE_TXT, "English");
    this.appComponent.initTranslate('es');
  }

  en() {
    localStorage.setItem(StorageEnum.LANGUAGE_TXT, "Español");
    this.appComponent.initTranslate('en');
  }

  async executeStart() {
    this.utilities.networkStatus(() => {
      localStorage.setItem(StorageEnum.TUTORIAL_KEY, 'true');
      this.router.navigateByUrl('/login');
    })

  }

}
