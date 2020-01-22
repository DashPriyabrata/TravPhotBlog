import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as $ from 'jquery';
import { Title, Meta } from '@angular/platform-browser';
import { BlogInfoService } from '../core/services/blog-info.service';
import { BlogContentService } from '../core/services/blog-content.service';
import { BlogTagService } from '../core/services/blog-tag.service';
import { BlogPost } from '../core/models/blog-post';
import { PostContent } from '../core/models/post-content';
import { BlogTag } from '../core/models/blog-tag';
import { Constants } from '../configs/constants';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, AfterViewInit {

  private blogId: string;
  blogData: BlogPost;
  postContent: PostContent;
  tags: BlogTag[];
  nextPost: BlogPost;
  prevPost: BlogPost;
  relatedPosts: BlogPost[];
  fbCommentsDataUrl: string;
  title: string;
  description: string;
  keywords: string;
  author: string;

  constructor(private route: ActivatedRoute, private blogInfoService: BlogInfoService, private blogContentService: BlogContentService, private blogTagService: BlogTagService,
    private titleService: Title, private metaTagService: Meta) {
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
      this.titleService.setTitle(this.title);
      this.metaTagService.updateTag(
        { name: 'description', content: this.description }
      );
      this.metaTagService.addTags([
        { name: 'keywords', content: this.keywords },
        { name: 'author', content: this.author },
        { property: 'og:title', content: this.title },
        { property: 'og:description', content: this.description },
        { property: 'og:image', content: this.blogData.TitleImage },
        { property: 'og:image:alt', content: this.blogData.City + ', ' + this.blogData.Country },
        { property: 'og:image:height', content: '600' },
        { property: 'og:image:width', content: '1200' },
        { property: 'published_date', content: this.blogData.PostDate.toString() }
      ]);
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
