import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PkmDetailsComponent } from './pkm-details.component';

const routes: Routes = [{ path: ':id', component: PkmDetailsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PkmDetailsRoutingModule { }
