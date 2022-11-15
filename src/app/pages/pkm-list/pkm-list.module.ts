import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PkmListRoutingModule } from './pkm-list-routing.module';
import { PkmListComponent } from './pkm-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PkmService } from '../../shared/services/pkm-service/pkm.service';
import { PkmButtonModule, PkmFavButtonModule } from 'projects/rkt-lib/src/public-api';
import { PkmSearchModule } from 'src/app/shared/components/pkm-search/pkm-search.module';
import { PkmCardsModule } from 'src/app/shared/components/pkm-cards/pkm-cards.module';
import { InfiniteScrollModule } from "ngx-infinite-scroll";


@NgModule({
  declarations: [
    PkmListComponent
  ],
  imports: [
    CommonModule,
    PkmListRoutingModule,
    HttpClientModule,
    PkmFavButtonModule,
    PkmCardsModule,
    PkmSearchModule,
    InfiniteScrollModule,
    PkmButtonModule
  ],
  exports: [
    PkmListComponent
  ],
  providers: [
    PkmService
  ]
})
export class PkmListModule { }
