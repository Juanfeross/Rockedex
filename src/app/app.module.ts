import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RktLibModule } from '../../projects/rkt-lib/src/lib/rkt-lib.module';
import { PkmTypesComponent } from './shared/components/pkm-types/pkm-types.component';
import { PkmSearchComponent } from './shared/components/pkm-search/pkm-search.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    RktLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
