import { Component } from '@angular/core';
import { SeoService } from './core/services/seo.service';
import { Constants } from './configs/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = Constants.SITE_TITLE;

  constructor(private seoService: SeoService) { }

  ngOnInit() {
    this.seoService.setUrl(window.location.href);
  }
}
