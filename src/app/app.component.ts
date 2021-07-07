import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { StorageItems } from './models/enums/storage.enum';
import { StorageService } from './services/storage.service';
import { UtilitiesService } from './services/utilities.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    private utilities: UtilitiesService,
    private storage: StorageService
  ) {
    this.initTranslate(null);
  }

  /**
 * M&eacute;todo para inicializar idioma de la aplicaci&oacute;n
 * @param language Lenguaje a usar en la app
 */
  async initTranslate(language: string) {
    if (language == null) {
      if (this.utilities.isNull(this.storage.get(StorageItems.locale))) {
        language = 'es';
        this.storage.set(StorageItems.languageTxt, language);
        this.storage.set(StorageItems.locale, language);
        this.storage.set(StorageItems.languageTxt, 'English');
      } else {
        language = await this.storage.get(StorageItems.locale);
      }

    }

    if (language == 'es') {
      this.storage.set(StorageItems.locale, 'es');
    } else {
      this.storage.set(StorageItems.locale, 'en');
    }

    this.translate.use(language); // Se define lenguaje  

  }
}
