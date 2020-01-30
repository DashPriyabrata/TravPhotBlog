import { Component, OnInit } from '@angular/core';

import { SeoService } from '../core/services/seo.service';
import { SeoData } from '../core/models/seo-data';
import { Constants } from '../configs/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private seoData: SeoData;
  title = 'Home - ' + Constants.SITE_TITLE;
  constructor(private seoService: SeoService) { }

  ngOnInit() {
    //Set Page Meta
    this.seoData = Object.assign(new SeoData(), {
      Title: this.title,
      Description: 'TravPhotBlog Home - Where you find travel blogs, knowledge about places you want to visit and some of the finest Landscape HD photos you would find around!',
      SiteName: Constants.SITE_TITLE,
      TwitterCard: 'summary'
    });

    this.seoService.setData(this.seoData);
  }

}
