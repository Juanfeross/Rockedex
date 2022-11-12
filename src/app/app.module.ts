import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { RktLibModule } from '../../projects/rkt-lib/src/lib/rkt-lib.module';


@NgModule({
  declarations: [
    AppComponent,
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
