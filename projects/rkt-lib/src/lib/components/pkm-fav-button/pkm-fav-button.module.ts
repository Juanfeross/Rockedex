import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmFavButtonComponent } from './pkm-fav-button.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PkmFavButtonComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PkmFavButtonComponent
  ]
})
export class PkmFavButtonModule { }
