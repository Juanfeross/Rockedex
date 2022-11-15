import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmLoadingComponent } from './pkm-loading.component';



@NgModule({
  declarations: [
    PkmLoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PkmLoadingComponent
  ]
})
export class PkmLoadingModule { }
