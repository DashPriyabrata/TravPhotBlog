import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { TrendingPostsService } from '../core/services/trending-posts.service';
import { ImageService } from '../core/services/image.service';
import { ContactUsService } from '../core/services/contact-us.service';
import { BlogPost } from '../core/models/blog-post';
import { ContactUs } from '../core/models/contact-us';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, AfterViewInit {
  trendingPosts: BlogPost[];
  country1Image: string;
  country2Image: string;
  contactForm: FormGroup;
  name: FormControl;
  email: FormControl;
  message: FormControl;
  status: boolean;
  showSuccessMsg: boolean = false;

  constructor(private trendingPostsService: TrendingPostsService, private imgService: ImageService, private contactUsService: ContactUsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.trendingPostsService.getFavouritePosts().subscribe((res) => {
      this.trendingPosts = res;
      this.trendingPosts.forEach(obj => obj.TitleImage =
        this.imgService.getImageUrl(obj.TitleImage, "Post").replace(/ /g, "%20") + "?width=560&height=373");
      this.country1Image = this.imgService.getImageUrl(this.trendingPosts[0].Country + ".jpeg", "Clipart/Places")
        .replace(/ /g, "%20") + "?width=560&height=373";
      this.country2Image = this.imgService.getImageUrl(this.trendingPosts[1].Country + ".jpeg", "Clipart/Places")
        .replace(/ /g, "%20") + "?width=560&height=373";
    });
    this.createForm();
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('body').removeAttr('class data-bgcolor style');

      $(".sayit_title_container, .sayit_flipbox_front, .sayit_flipbox_back").each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-src') + ')');
      });
      $(".sayit_js_height").each(function () {
        $(this).css('height', $(this).attr('data-height'));
      });
    });
  }

  onFormSubmit(name, email, message) {
    let submission = new ContactUs();
    submission.Name = name;
    submission.Email = email;
    submission.Message = message;
    this.contactUsService.postContactUsSubmission(submission)
      .subscribe(stat => {
        this.status = stat;
      },
      response => {
        console.log("POST call in error", response);
      });
    this.status = true;
  }

  createForm() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.message = new FormControl('', Validators.required);
    this.contactForm = this.fb.group({
      name: this.name,
      email: this.email,
      message: this.message
    });
  }

  toggleForm() {
    this.contactForm.controls['message'].reset()
    this.status = false;
  }
}
