import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from './../../shared/shared.module';
import { TutorialPageRoutingModule } from './tutorial-routing.module';
import { TutorialPage } from './tutorial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorialPageRoutingModule,
    TranslateModule,
    SharedModule

  ],
  declarations: [TutorialPage],
})
export class TutorialPageModule { }
