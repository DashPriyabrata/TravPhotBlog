import { TestBed } from '@angular/core/testing';

import { TrendingPostsService } from './trending-posts.service';

describe('TrendingPostsService', () => {
  let service: TrendingPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
