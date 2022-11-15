import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PkmFavoritesComponent } from './pkm-favorites.component';

const routes: Routes = [{ path: '', component: PkmFavoritesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PkmFavoritesRoutingModule { }
