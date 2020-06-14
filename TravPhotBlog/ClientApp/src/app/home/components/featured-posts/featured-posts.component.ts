import { Component, OnInit } from '@angular/core';
import { FavouritePostsService } from '../../../core/services/favourite-posts.service';
import { ImageService } from '../../../core/services/image.service';
import { BlogPost } from '../../../core/models/blog-post';

@Component({
  selector: 'featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.css']
})
export class FeaturedPostsComponent implements OnInit {
  favouritePosts: BlogPost[];
  constructor(private favouritePostsService: FavouritePostsService, private imgService: ImageService) { }

  ngOnInit() {
    this.favouritePostsService.getFavouritePosts().subscribe((res) => {
      this.favouritePosts = res;
      this.favouritePosts.forEach(obj => obj.TitleImage = this.imgService.getImageUrl(obj.TitleImage, "Post") + "?width=780&height=634");
    });
  }

}
