import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PkmFavoritesRoutingModule } from './pkm-favorites-routing.module';
import { PkmFavoritesComponent } from './pkm-favorites.component';


@NgModule({
  declarations: [
    PkmFavoritesComponent
  ],
  imports: [
    CommonModule,
    PkmFavoritesRoutingModule
  ]
})
export class PkmFavoritesModule { }
