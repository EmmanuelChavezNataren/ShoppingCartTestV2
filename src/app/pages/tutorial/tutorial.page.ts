import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageItems } from 'src/app/models/enums/storage.enum';

import { AppComponent } from '../../app.component';
import { StorageService } from '../../services/storage.service';
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
    private router: Router,
    private storage: StorageService
  ) { }

  ngOnInit() {
    this.es();
  }


  es() {
    this.storage.set(StorageItems.languageTxt, 'English');
    this.appComponent.initTranslate('es');
  }

  en() {
    this.storage.set(StorageItems.languageTxt, 'Español');
    this.appComponent.initTranslate('en');
  }

  async executeStart() {
    this.utilities.networkStatus(() => {
      this.storage.set(StorageItems.tutorialKey, true);
      this.router.navigateByUrl('/login');
    })

  }

}
