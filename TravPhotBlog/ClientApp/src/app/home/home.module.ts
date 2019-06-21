import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { FeaturedPostsComponent } from './components/featured-posts/featured-posts.component';

@NgModule({
  declarations: [HomeComponent, HeroCarouselComponent, FeaturedPostsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
