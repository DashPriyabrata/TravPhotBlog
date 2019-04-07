import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { NgxPopper } from 'angular-popper';
import { InstaPostComponent } from './shared/components/instapost/instapost.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InstaPostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    AppRoutingModule,
    NgxPopper
  ],
  providers: [],
  bootstrap: [AppComponent, NavigationComponent, InstaPostComponent]
})
export class AppModule { }
