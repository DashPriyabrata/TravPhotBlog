import { Component, OnInit } from '@angular/core';
import { FeaturedPostsService } from '../../../core/services/featured-posts.service';
import { ImageService } from '../../../core/services/image.service';
import { BlogPost } from '../../../core/models/blog-post';

@Component({
  selector: 'featured-posts',
  templateUrl: './featured-posts.component.html',
  styleUrls: ['./featured-posts.component.css']
})
export class FeaturedPostsComponent implements OnInit {
  featuredPosts: BlogPost[];
  constructor(private featuredPostsService: FeaturedPostsService, private imgService: ImageService) { }

  ngOnInit() {
    this.featuredPostsService.getFeaturedPosts().subscribe((res) => {
      this.featuredPosts = res;
      this.featuredPosts.forEach(obj => obj.TitleImage = this.imgService.getImageUrl(obj.TitleImage, "Post") + "?width=780&height=634");
    });
  }

}
