import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoHeaderComponent } from './logo-header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [LogoHeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [LogoHeaderComponent]
})
export class LogoHeaderModule { }
