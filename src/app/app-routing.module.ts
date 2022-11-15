import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'pkm-list', loadChildren: () => import('./pages/pkm-list/pkm-list.module').then(m => m.PkmListModule) },
  { path: 'pkm-details', loadChildren: () => import('./pages/pkm-details/pkm-details.module').then(m => m.PkmDetailsModule) },
  { path: 'pkm-favorites', loadChildren: () => import('./pages/pkm-favorites/pkm-favorites.module').then(m => m.PkmFavoritesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
