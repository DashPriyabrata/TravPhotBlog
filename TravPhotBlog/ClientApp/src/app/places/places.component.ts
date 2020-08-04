import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
import { ImageService } from '../core/services/image.service';
import { SearchService } from '../core/services/search.service';
import { BlogPost } from '../core/models/blog-post';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent implements OnInit, AfterViewInit {
  placeName: string;
  placeType: string;
  placeImage: string;
  searchedBlogs: BlogPost[];
  paginationFakeArray: any;
  paginationCount: number = 0;

  constructor(private route: ActivatedRoute, private imgService: ImageService, private searchService: SearchService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.placeType = params.get('type');
      this.placeName = params.get('placeName');
    });

    this.paginationFakeArray = new Array(1);
  }

  ngOnInit(): void {
    if (this.placeType.length > 0 && this.placeName.length > 0) {
      this.placeImage = this.imgService.getImageUrl(this.placeName + ".jpeg", "Clipart/Places").replace(/ /g, "%20") + "?width=1920&height=900";
      
      if (this.placeType == "country") {
        this.searchService.getAllBlogsOfCountry(this.placeName).subscribe((res) => {
          this.searchedBlogs = res;
          this.searchedBlogs.forEach(obj => obj.TitleImage = this.imgService.getImageUrl(obj.TitleImage, "Post"));
          if (this.searchedBlogs.length > 8) {
            if (this.searchedBlogs.length % 8 > 0) {
              this.paginationCount = Math.floor(this.searchedBlogs.length / 8);
            }
            else {
              this.paginationCount = this.searchedBlogs.length / 8;
            }
          }
        });
      }
      else {
        this.searchService.getAllBlogsOfCity(this.placeName).subscribe((res) => {
          this.searchedBlogs = res;
          this.searchedBlogs.forEach(obj => obj.TitleImage = this.imgService.getImageUrl(obj.TitleImage, "Post"));
          if (this.searchedBlogs.length > 8) {
            if (this.searchedBlogs.length % 8 > 0) {
              this.paginationCount = Math.floor(this.searchedBlogs.length / 8);
            }
            else {
              this.paginationCount = this.searchedBlogs.length / 8;
            }
          }
        });
      }
    }
  }

  onLoadMore() {
    if (this.paginationFakeArray.length <= this.paginationCount) {
      this.paginationFakeArray.length += 1;
    }
    else {
      this.paginationCount = 0;
    }
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $(".sayit_title_container").each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
      });
      $(".sayit_js_height").each(function () {
        $(this).css('height', $(this).attr('data-height'));
      });
    });
  }
}
