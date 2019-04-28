import { TestBed } from '@angular/core/testing';

import { FeaturedPostsService } from './featured-posts.service';

describe('FeaturedPostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeaturedPostsService = TestBed.get(FeaturedPostsService);
    expect(service).toBeTruthy();
  });
});
