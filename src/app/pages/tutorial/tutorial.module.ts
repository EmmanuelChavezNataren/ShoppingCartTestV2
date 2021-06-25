import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorialPageRoutingModule } from './tutorial-routing.module';

import { TutorialPage } from './tutorial.page';
import { TranslateModule } from '@ngx-translate/core';
import { LogoHeaderModule } from '../../shared/logo-header/logo-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPageRoutingModule,
    TranslateModule,
    LogoHeaderModule
  ],
  declarations: [TutorialPage],
})
export class TutorialPageModule {}
