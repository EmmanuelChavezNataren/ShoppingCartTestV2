import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from '../../services/utilities.service';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { User } from '../../models/user.model';

/**
 * Clase que contiene l&oacute;gica de la pantalq de inicio
 * Lista de Productos y Ofertas del d&iacute;a
 * @author Emmanuel Ch&aacute;vez
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  userProfile: User;
  constructor(
    private utilities: UtilitiesService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.utilities.hideLoader();
    this.store.select('auth').subscribe(
      ({ user }) => {          
       this.userProfile = user;
       console.log('UserProfile ', this.userProfile);
       this.utilities.hideLoader();
       });  
  }

}
