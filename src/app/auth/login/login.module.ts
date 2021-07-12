import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserEffect } from 'src/store/effects/user.effects';
import { UserFacade } from 'src/store/facades/user.facade';
import * as fromUser from 'src/store/reducers/user.reducer';

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
