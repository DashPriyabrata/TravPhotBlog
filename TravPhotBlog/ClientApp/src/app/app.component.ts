import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { CanonicalService } from './core/services/canonical.service';
import { Constants } from './configs/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = Constants.SITE_TITLE;

  constructor(private canonicalService: CanonicalService, private metaTagService: Meta) { }

  ngOnInit() {
    this.canonicalService.setCanonicalURL();
    this.metaTagService.addTag({ property: 'og:url', content: window.location.href });
  }
}
