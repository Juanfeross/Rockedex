import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmButtonModule } from 'projects/rkt-lib/src/public-api';
import { PkmSearchComponent } from './pkm-search.component';




@NgModule({
  declarations: [
    PkmSearchComponent
  ],
  imports: [
    CommonModule,
    PkmButtonModule
  ],
  exports: [
    PkmSearchComponent
  ]
})
export class PkmSearchModule { }
