import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { Navbar1Component } from './components/navbar1/navbar1.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { AjoutHeroComponent } from './components/ajout-hero/ajout-hero.component';
import { ListHeroComponent } from './components/list-hero/list-hero.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UpdateHeroComponent } from './components/update-hero/update-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar1Component,
    FooterComponent,
    HeroComponent,
    AjoutHeroComponent,
    ListHeroComponent,
    NotfoundComponent,
    UpdateHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
