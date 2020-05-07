import { TestBed } from '@angular/core/testing';

import { PrecisePostsService } from './precise-posts.service';

describe('PrecisePostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrecisePostsService = TestBed.get(PrecisePostsService);
    expect(service).toBeTruthy();
  });
});
