import { Component } from '@angular/core';
import { CanonicalService } from './core/services/canonical.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClientApp';

  constructor(private canonicalService: CanonicalService) { }

  ngOnInit() {
    this.canonicalService.setCanonicalURL();
  }
}
