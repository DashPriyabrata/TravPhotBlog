import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { NgxPopper } from 'angular-popper';
import { InstaPostComponent } from './shared/components/instapost/instapost.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { HomeModule } from './home/home.module';
import { PostModule } from './post/post.module';

@NgModule({
  declarations: [
    AppComponent,
    //NavigationComponent,
    InstaPostComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CarouselModule,
    AppRoutingModule,
    CommonModule,
    NgxPopper,
    HomeModule,
    PostModule
  ],
  providers: [],
  bootstrap: [AppComponent, InstaPostComponent]
})
export class AppModule { }
