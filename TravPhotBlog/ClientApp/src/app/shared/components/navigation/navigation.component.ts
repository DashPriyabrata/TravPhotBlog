import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
  templateUrl: './navigation.component.html'
})
export class NavigationComponent {
  location: Location
  title = 'Navigation';
  constructor(location: Location) { this.location = location }

  isActive(viewLocation: string) {
    console.log(this.location.path());
    return this.location.path().endsWith(viewLocation);
  }
}
