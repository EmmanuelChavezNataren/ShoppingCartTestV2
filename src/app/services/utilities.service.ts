import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Toast } from '@ionic-native/toast/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageItems } from 'src/app/models/enums/storage.enum';

import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {
  readonly CLASS_NAME: "UtilitiesService";
  private isLoading: boolean;
  private loaderTimeout: NodeJS.Timeout;

  constructor(
    private network: Network,
    private loadingCtrl: LoadingController,
    private translateService: TranslateService,
    private toast: Toast,
    private alertCtrl: AlertController,
    private storage: StorageService
  ) { }


  /**
 *  M&eacute;todo para el uso de cambio de idioma.
 */
  translate(key: string, params?: Object): string {
    let value: string = undefined;
    this.translateService.get(key, params).subscribe((trlValue) => {
      value = trlValue;
    }, (error) => {
      console.error(JSON.stringify(error));
    }
      , () => {
        value = value == key ? undefined : value;
      })
    return value;
  }

  /**
 * M&eacute;todo que valida si el dispositivo tiene red a internet.
 * @param on Par&aacute;metro que se establece una vez se cumpla la condici&oacute;n de que estas en linea
 */
  networkStatus(on?: () => void) {

    let title: string = this.translate("networkError");
    let description: string = this.translate("networkMessage");
    let button: string = this.translate("buttonOk");

    if (this.network.type) {
      if (this.network.type !== "none") {
        if (on) on();
      } else {
        this.hideLoader();
        this.showBasicAlert(title, description, button);
      }
    } else {
      if (navigator.onLine) {
        if (on) on();
      } else {
        this.hideLoader();
        this.showBasicAlert(title, description, button);
      }
    }
  }

  /**
* M&eacute;todo que valida que no haya campos nulos.
* @param value Campo a validar
*/
  isNull(value): any {
    const valAux = JSON.stringify(value);
    return (value === null
      || value === undefined
      || value === ""
      || value === " "
      || value === {}
      || value === []
      || value === "null"
      || value === "undefined"
      || valAux === "null"
      || valAux === "{}"
      || valAux === "[]"
    )
  }

  /**
* M&eacute;todo que muestra el componente Loading
* con el mensaje que recibe como par&aacute;metro
* @param defaultMessage Mensaje que se mostrará en en caso de no encontrar la clave
* @param messageKey Clave para traducir el mansaje al idioma de la app
*/
  async showLoader(defaultMessage?: string, messageKey?: string) {
    let message: string;

    if (this.isNull(message) && this.isNull(messageKey)) {
      defaultMessage = 'Cargando...'
      messageKey = this.translate('loadingMessage');
    }

    if (messageKey) {
      message = this.translate(messageKey);
    }
    message = message == undefined ? defaultMessage : message;
    await this.loadingCtrl.create({
      message: message,
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
        if (onSuccess) onSuccess();
      }).catch((_e) => {
        console.error(_e);
        if (onSuccess) onSuccess();
      });
    }

    if (this.loaderTimeout) {
      clearTimeout(this.loaderTimeout);
      this.loaderTimeout = null;
    }
  }

  /**
 * Muestra un mensaje al usuario por medio de Toast(mensaje r&aacute;pido)
 * @param defaultMessage Mensaje por defecto en caso de no encontrar la clave de traducci&oacute;n
 * @param translateKey Clave del mensaje pra traducci&oacute;n
 * @param duration Duraci&oacute;n del mensaje por defecto es 2000 ms
 * @param position Posici&oacute;n del mensaje, por defecto se muestra en el centro
 */
  public showMessage(defaultMessage: string, translateKey?: string, duration?: string, position?: string, params?: Object): void {
    let time: string = undefined == duration ? '2000' : duration;
    let pos = undefined == position ? 'center' : position;
    let message: string = "";//this.translate(translateKey);
    if (translateKey != undefined && null != translateKey && "" != translateKey) {
      message = this.translate(translateKey, params);
    }
    this.toast.show(message ? message : defaultMessage, time, pos).subscribe(
      toast => {
      }, error => {
        console.error("No se puede mostrar Toast:" + JSON.stringify(error));
      }
    );
  }

  /*
*M&eacute;todo para mostrar un alerta basica
*/
  showBasicAlert(title, subTitle, buttonMessage, buttonAction?) {
    const alert = this.alertCtrl.create({
      header: title,
      subHeader: subTitle,
      buttons: [
        {
          text: buttonMessage,
          handler: () => {
            if (buttonAction) buttonAction();
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });

  }

  /**
   * M&eacute;todo para establecer el timeout de la aplicaci&oacute;n
   * @returns Tiempo establecido para el timeout
   */
  setTimeoutLoader(): NodeJS.Timeout {
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
