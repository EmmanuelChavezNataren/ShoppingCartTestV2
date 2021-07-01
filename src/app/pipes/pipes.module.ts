import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SplitPipe } from './split.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [SplitPipe],
  exports: [SplitPipe]
})
export class PipesModule { }