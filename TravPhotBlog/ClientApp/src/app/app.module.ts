import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { PlacesModule } from './places/places.module';
import { LoaderService } from './core/services/loader.service';
import { LoaderInterceptor } from './core/interceptors/loader-interceptor';
import { MyLoaderComponent } from './shared/components/my-loader/my-loader.component';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    //NavigationComponent,
    InstaPostComponent,
    SafePipe,
    MyLoaderComponent,
    HeaderComponent
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
    PostModule,
    PlacesModule
  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent, InstaPostComponent, HeaderComponent]
})
export class AppModule { }
