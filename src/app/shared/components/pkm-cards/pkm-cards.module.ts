import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PkmCardsComponent } from './pkm-cards.component';
import { RouterModule } from '@angular/router';
import { PkmFavButtonModule } from 'projects/rkt-lib/src/public-api';
import { PipesModule } from 'src/app/core/pipes/pipes.module';



@NgModule({
  declarations: [
    PkmCardsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PkmFavButtonModule,
    PipesModule
  ],
  exports: [
    PkmCardsComponent
  ],
  providers: [

  ]
})
export class PkmCardsModule { }
