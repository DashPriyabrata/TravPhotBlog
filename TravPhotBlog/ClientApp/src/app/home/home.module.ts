import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { HeroCarouselComponent } from './components/hero-carousel/hero-carousel.component';
import { FeaturedPostsComponent } from './components/featured-posts/featured-posts.component';
import { RecentPostsComponent } from './components/recent-posts/recent-posts.component';

@NgModule({
  declarations: [HomeComponent, HeroCarouselComponent, FeaturedPostsComponent, RecentPostsComponent],
  imports: [
    CommonModule
    //HomeRoutingModule
  ]
})
export class HomeModule { }
