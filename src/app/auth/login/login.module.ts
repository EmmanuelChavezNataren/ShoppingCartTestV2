import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import * as fromUser from '../../../store/reducers/user.reducer';
import { PipesModule } from '../../pipes/pipes.module';
import { UserEffect } from './../../../store/effects/user.effects';
import { UserFacade } from './../../../store/facades/user.facade';
import { SharedModule } from './../../shared/shared.module';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    TranslateModule,
    SharedModule,
    PipesModule,
    StoreModule.forFeature(fromUser.featureKey, fromUser.reducer),
    EffectsModule.forFeature([UserEffect])
  ],
  providers: [UserFacade],
  declarations: [LoginPage]
})
export class LoginPageModule { }
