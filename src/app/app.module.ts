import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroGridComponent } from './components/hero-grid/hero-grid.component';
import { HeroDetailsComponent } from './components/hero-details/hero-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroGridComponent,
    HeroDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
