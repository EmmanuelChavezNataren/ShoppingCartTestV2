import { Injectable } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageItems } from 'src/app/models/enums/storage.enum';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  readonly CLASS_NAME: 'UtilitiesService';
  private isLoading: boolean;
  private loaderTimeout;

  constructor(
    private loadingCtrl: LoadingController,
    private translateService: TranslateService,
    private toast: Toast,
    private alertCtrl: AlertController,
    private storage: StorageService
  ) { }


  /**
   *  M&eacute;todo para el uso de cambio de idioma.
   */
  translate(key: string, params?: any): string {
    let value: string;
    this.translateService.get(key, params).subscribe((trlValue) => {
      value = trlValue;
    }, (error) => {
      console.error(JSON.stringify(error));
    }
      , () => {
        value = value === key ? undefined : value;
      });
    return value;
  }

  /**
   * M&eacute;todo que valida si el dispositivo tiene red a internet.
   *
   * @param on Par&aacute;metro que se establece una vez se cumpla la condici&oacute;n de que estas en linea
   */
  networkStatus(on?: () => void) {

    const title: string = this.translate('networkError');
    const description: string = this.translate('networkMessage');
    const button: string = this.translate('buttonOk');

    if (navigator.onLine) {
      if (on) { on(); }
    } else {
      this.showBasicAlert(title, description, button);
    }
  }

  /**
   * M&eacute;todo que valida que no haya campos nulos.
   *
   * @param value Campo a validar
   */
  isNull(value): any {
    const valAux = JSON.stringify(value);
    return (value === null
      || value === undefined
      || value === ''
      || value === ' '
      || value === {}
      || value === []
      || value === 'null'
      || value === 'undefined'
      || valAux === 'null'
      || valAux === '{}'
      || valAux === '[]'
    );
  }

  /**
   * M&eacute;todo que muestra el componente Loading
   * con el mensaje que recibe como par&aacute;metro
   *
   * @param defaultMessage Mensaje que se mostrará en en caso de no encontrar la clave
   * @param messageKey Clave para traducir el mansaje al idioma de la app
   */
  async showLoader(defaultMessage?: string, messageKey?: string) {
    let message: string;

    if (this.isNull(message) && this.isNull(messageKey)) {
      defaultMessage = 'Cargando...';
      messageKey = this.translate('loadingMessage');
    }

    if (messageKey) {
      message = this.translate(messageKey);
    }
    message = message === undefined ? defaultMessage : message;
    await this.loadingCtrl.create({
      message,
    }).then(loadingEl => {
      this.isLoading = true;
      loadingEl.present();
    });
    this.loaderTimeout = this.setTimeoutLoader();
  }


  /**
   * M&eacute;todo que oculta el Loader.
   */
  async hideLoader(onSuccess?: any) {
    if (this.isLoading) {
      await this.loadingCtrl.dismiss().then(() => {
        this.isLoading = false;
        if (onSuccess) { onSuccess(); }
      }).catch((_e) => {
        console.error(_e);
        if (onSuccess) { onSuccess(); }
      });
    }

    if (this.loaderTimeout) {
      clearTimeout(this.loaderTimeout);
      this.loaderTimeout = null;
    }
  }

  /**
   * Muestra un mensaje al usuario por medio de Toast(mensaje r&aacute;pido)
   *
   * @param defaultMessage Mensaje por defecto en caso de no encontrar la clave de traducci&oacute;n
   * @param translateKey Clave del mensaje pra traducci&oacute;n
   * @param duration Duraci&oacute;n del mensaje por defecto es 2000 ms
   * @param position Posici&oacute;n del mensaje, por defecto se muestra en el centro
   */
  public showMessage(defaultMessage: string, translateKey?: string, duration?: string, position?: string, params?: any): void {
    const time: string = undefined === duration ? '3000' : duration;
    const pos = undefined === position ? 'center' : position;
    let message = '';//this.translate(translateKey);
    if (translateKey !== undefined && null != translateKey && '' !== translateKey) {
      message = this.translate(translateKey, params);
    }
    this.toast.show(message ? message : defaultMessage, time, pos).subscribe(
      toast => {
      }, error => {
        console.error('No se puede mostrar Toast:' + JSON.stringify(error));
      }
    );
  }

  showBasicAlert(title: string, subTitle: string, buttonSuccessTitle: string, buttonAction?: () => void) {
    this.alertCtrl.create({
      header: title,
      subHeader: subTitle,
      buttons: [
        {
          text: buttonSuccessTitle,
          handler: () => {
            if (buttonAction) { buttonAction(); }
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });

  }

  showConfirmAlert(
    title: string,
    subTitle: string,
    buttonSuccessTitle: string,
    buttonCancelTitle: string,
    buttonSuccessAction?: () => void,
    buttonCancelAction?: () => void) {
    this.alertCtrl.create({
      header: title,
      subHeader: subTitle,
      buttons: [
        {
          text: buttonCancelTitle,
          role: 'cancel',
          handler: () => {
            if (buttonCancelAction) { buttonCancelAction(); }
          }
        },
        {
          text: buttonSuccessTitle,
          handler: () => {
            if (buttonSuccessAction) { buttonSuccessAction(); }
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });

  }

  /**
   * M&eacute;todo para establecer el timeout de la aplicaci&oacute;n
   *
   * @returns Tiempo establecido para el timeout
   */
  setTimeoutLoader() {
    this.storage.set(StorageItems.isTimeOutError, false);
    return setTimeout(() => {
      this.showBasicAlert(this.translate('networkError'),
        this.translate('networkMessage'),
        this.translate('buttonOk'));
      this.storage.set(StorageItems.isTimeOutError, true);
      this.loadingCtrl.dismiss();
      this.isLoading = false;
    }, 10000);
  }

}
