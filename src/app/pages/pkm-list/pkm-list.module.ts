import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PkmListRoutingModule } from './pkm-list-routing.module';
import { PkmListComponent } from './pkm-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PkmService } from '../../shared/services/pkm-service/pkm.service';
import { OrderListPipe } from '../../core/pipes/order-list.pipe';


@NgModule({
  declarations: [
    PkmListComponent,
    OrderListPipe
  ],
  imports: [
    CommonModule,
    PkmListRoutingModule,
    HttpClientModule
  ],
  exports: [
    PkmListComponent
  ],
  providers: [
    PkmService
  ]
})
export class PkmListModule { }
