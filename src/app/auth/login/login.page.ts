import { Component, OnInit } from '@angular/core';
import { StorageEnum } from 'src/app/models/enums/storage.enum';
import { AppComponent } from '../../app.component';
import { UtilitiesService } from '../../services/utilities.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.reducer';
import { User } from '../../models/user.model';
import * as fromAuth from '../../../store/actions/auth.actions';

/**
 * Clase para manejar la l&oacute;gica del Login
 * @author Emmanuel Ch&aacute;vez
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public userProfile: User = null;

  constructor(
    private appComponent: AppComponent,
    private utilities: UtilitiesService,
    private router: Router,
    private store: Store<AppState>) {
  }


  ngOnInit() {
    this.es();
  }

  /**
   * M&eacute;todo que precarga el perfil del usuario mediante una acci&oacute;n
   */
  async ionViewDidEnter() {
    localStorage.setItem(StorageEnum.TOKEN_LOGIN, 'false');
      await this.utilities.showLoader();      
      console.log('Dispatch Store');
      this.store.select('auth').subscribe(
         ({ user }) => {          
          this.userProfile = user;
          console.log('UserProfile ', this.userProfile);
          this.utilities.hideLoader();
          });
      //Ejecuci&oacute;n de acci&oacute;n loadUser()       
      this.store.dispatch(fromAuth.loadUser());    

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
   * M&eacute;todo que realiza el inicio de sesi&oacute;n.
   * Redirige a Inicio
   */
  login() {
    localStorage.setItem(StorageEnum.TOKEN_LOGIN, 'true');
    this.utilities.showLoader();    
    this.router.navigateByUrl('/tabs', { replaceUrl: true });
  }

  loginInvited() {

  }

}
