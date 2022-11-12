import { NgModule } from '@angular/core';
import { RktLibComponent } from './rkt-lib.component';
import { PkmButtonModule } from './components/pkm-button/pkm-button.module';
import { PkmFavButtonModule } from './components/pkm-fav-button/pkm-fav-button.module';
import { PkmTopBarModule } from './components/pkm-top-bar/pkm-top-bar.module';




@NgModule({
  declarations: [
    RktLibComponent
  ],
  imports: [
    PkmButtonModule,
    PkmFavButtonModule,
    PkmTopBarModule
  ],
  exports: [
    RktLibComponent
  ]
})
export class RktLibModule { }
