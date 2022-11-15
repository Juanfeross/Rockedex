import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PkmFavoritesRoutingModule } from './pkm-favorites-routing.module';
import { PkmFavoritesComponent } from './pkm-favorites.component';
import { PkmCardsModule } from '../../shared/components/pkm-cards/pkm-cards.module';
import { PkmSearchModule } from '../../shared/components/pkm-search/pkm-search.module';
import { PkmBackModule } from '../../shared/components/pkm-back/pkm-back.module';
import { HttpClientModule } from '@angular/common/http';
import { PkmService } from 'src/app/shared/services/pkm-service/pkm.service';


@NgModule({
  declarations: [
    PkmFavoritesComponent
  ],
  imports: [
    CommonModule,
    PkmFavoritesRoutingModule,
    PkmCardsModule,
    PkmSearchModule,
    PkmBackModule,
    HttpClientModule
  ],
  providers: [
    PkmService
  ]
})
export class PkmFavoritesModule { }
