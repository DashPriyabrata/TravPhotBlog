import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
import { Meta } from '@angular/platform-browser';

import { BlogInfoService } from '../core/services/blog-info.service';
import { BlogContentService } from '../core/services/blog-content.service';
import { BlogTagService } from '../core/services/blog-tag.service';
import { SeoService } from '../core/services/seo.service';
import { BlogPost } from '../core/models/blog-post';
import { PostContent } from '../core/models/post-content';
import { BlogTag } from '../core/models/blog-tag';
import { SeoData } from '../core/models/seo-data';
import { Constants } from '../core/configs/constants';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {

  private blogId: string;
  private seoData: SeoData;
  blogData: BlogPost;
  postContent: PostContent;
  tags: BlogTag[];
  nextPost: BlogPost;
  prevPost: BlogPost;
  relatedPosts: BlogPost[];
  fbCommentsDataUrl: string;
  private title: string;
  private description: string;
  private keywords: string;
  private author: string;

  constructor(private route: ActivatedRoute, private blogInfoService: BlogInfoService, private blogContentService: BlogContentService, private blogTagService: BlogTagService,
    private metaTagService: Meta, private seoService: SeoService) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.blogId = params.get('blogId');
    });
    this.fbCommentsDataUrl = "http://travphoblog.com/post";
  }

  ngOnInit() {
    this.blogInfoService.getBlogInfo(this.blogId).subscribe((res) => {
      this.blogData = res;
      //Page Title & SEO Stuff
      this.title = this.blogData.Title + ' - ' + Constants.SITE_TITLE;
      this.description = this.blogData.Title + ' ' + this.blogData.City + ' ' + this.blogData.Country + ' ' + this.blogData.Category;
      this.keywords = this.blogData.Title + ', ' + this.blogData.City + ', ' + this.blogData.Country;
      this.author = this.blogData.blogger.FirstName + ' ' + this.blogData.blogger.LastName;

      this.blogContentService.getPostContent(this.blogData.ContentId).subscribe((res) => {
        this.postContent = res;
      });
      this.blogTagService.getTags(this.blogData.BlogTagId).subscribe((res) => {
        this.tags = res;
      });
      this.blogContentService.getPrevPost(this.blogData.BlogId).subscribe((res) => {
        this.prevPost = res;
      });
      this.blogContentService.getNextPost(this.blogData.BlogId).subscribe((res) => {
        this.nextPost = res;
      });
      this.blogContentService.getRelatedPosts(this.blogData.BlogTagId).subscribe((res) => {
        this.relatedPosts = res;
      });
      //Set Page Meta
      this.seoData = Object.assign(new SeoData(), {
        Title: this.title,
        Description: this.description,
        Keywords: this.keywords,
        Author: this.author,
        Image: this.blogData.TitleImage,
        ImageAlt: this.blogData.City + ', ' + this.blogData.Country,
        SiteName: Constants.SITE_TITLE,
        Published: this.blogData.PostDate,
        TwitterCard: 'summary_large_image'
      });

      this.seoService.setData(this.seoData);
    });
  }

  ngAfterViewInit() {
    $(".sayit_title_container").each(function () {
      $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
    });

    //Facebook comment plugin script.
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0&appId=2099597870257585';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  public goToByScroll(id: string) {
    $('html,body').animate({ scrollTop: $("#" + id).offset().top - 100 }, 'slow');
  }
}
