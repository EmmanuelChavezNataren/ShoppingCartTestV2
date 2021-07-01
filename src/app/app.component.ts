import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StorageEnum } from './models/enums/storage.enum';
import { UtilitiesService } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private utilities: UtilitiesService
  ) {
    this.initTranslate(null);
  }

  /**
 * M&eacute;todo para inicializar idioma de la aplicaci&oacute;n
 * @param language Lenguaje a usar en la app
 */
  initTranslate(language: string) {
    if (language == null) {
      if (this.utilities.isNull(localStorage.getItem(StorageEnum.LOCALE))) {
        language = 'es';
        localStorage.setItem(StorageEnum.LANGUAGE, language);
        localStorage.setItem(StorageEnum.LOCALE, language);
        localStorage.setItem(StorageEnum.LANGUAGE_TXT, 'English');
      } else {
        language = localStorage.getItem(StorageEnum.LOCALE);
      }

    }

    if (language == 'es') {
      localStorage.setItem(StorageEnum.LOCALE, 'es');
    } else {
      localStorage.setItem(StorageEnum.LOCALE, 'en');
    }

    this.translate.use(language); // Se define lenguaje  

  }
}
