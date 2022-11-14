import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PkmListRoutingModule } from './pkm-list-routing.module';
import { PkmListComponent } from './pkm-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PkmService } from '../../shared/services/pkm-service/pkm.service';
import { OrderListPipe } from '../../core/pipes/order-list.pipe';
import { RktLibModule } from '../../../../projects/rkt-lib/src/lib/rkt-lib.module';
import { PkmTypesComponent } from '../../shared/components/pkm-types/pkm-types.component';
import { PkmSearchComponent } from 'src/app/shared/components/pkm-search/pkm-search.component';
import { PkmFavButtonModule } from 'projects/rkt-lib/src/public-api';


@NgModule({
  declarations: [
    PkmListComponent,
    OrderListPipe,
    PkmTypesComponent,
    PkmSearchComponent
  ],
  imports: [
    CommonModule,
    PkmListRoutingModule,
    HttpClientModule,
    PkmFavButtonModule
  ],
  exports: [
    PkmListComponent
  ],
  providers: [
    PkmService
  ]
})
export class PkmListModule { }
