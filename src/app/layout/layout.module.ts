import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { PkmTopBarModule } from '../../../projects/rkt-lib/src/lib/components/pkm-top-bar/pkm-top-bar.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PkmTopBarModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
