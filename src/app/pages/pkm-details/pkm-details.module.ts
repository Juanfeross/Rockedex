import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PkmDetailsRoutingModule } from './pkm-details-routing.module';
import { PkmDetailsComponent } from './pkm-details.component';
import { RouterModule } from '@angular/router';
import { PkmBackModule } from '../../shared/components/pkm-back/pkm-back.module';
import { PipesModule } from '../../core/pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';
import { PkmService } from '../../shared/services/pkm-service/pkm.service';
import { PkmButtonModule } from '../../../../projects/rkt-lib/src/lib/components/pkm-button/pkm-button.module';



@NgModule({
  declarations: [
    PkmDetailsComponent
  ],
  imports: [
    CommonModule,
    PkmDetailsRoutingModule,
    RouterModule,
    HttpClientModule,
    PkmBackModule,
    PipesModule,
    PkmButtonModule
  ],
  providers: [
    PkmService
  ]
})
export class PkmDetailsModule { }
