import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmEmptyComponent } from './pkm-empty.component';



@NgModule({
  declarations: [
    PkmEmptyComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PkmEmptyComponent
  ]
})
export class PkmEmptyModule { }
