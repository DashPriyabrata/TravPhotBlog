import { TestBed } from '@angular/core/testing';

import { FavouritePostsService } from './favourite-posts.service';

describe('FavouritePostsService', () => {
  let service: FavouritePostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouritePostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
