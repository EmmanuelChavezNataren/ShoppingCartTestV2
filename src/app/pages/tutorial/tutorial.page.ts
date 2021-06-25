import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { StorageEnum } from 'src/app/models/enums/storage.enum';
import { AppComponent } from '../../app.component';
import { UtilitiesService } from '../../services/utilities.service';
import { ActivatedRoute, Router, Routes } from '@angular/router';

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


  /**
   * M&eacute;todo para configurar el idioma en español.
   */
  es() {
    localStorage.setItem(StorageEnum.LANGUAGE_TXT, "English");
    this.appComponent.initTranslate('es');
  }

  /**
 * M&eacute;todo para configurar el idioma en iglés.
 */
  en() {
    localStorage.setItem(StorageEnum.LANGUAGE_TXT, "Español");
    this.appComponent.initTranslate('en');
  }

  /**
 * M&eacute;todo que ejecuta el inicio de la app de carrito de compras
 */
  async executeStart() {
    this.utilities.networkStatus(() => {
      localStorage.setItem(StorageEnum.TUTORIAL_KEY, 'true');
      this.router.navigateByUrl('/login');
    })

  }

}
