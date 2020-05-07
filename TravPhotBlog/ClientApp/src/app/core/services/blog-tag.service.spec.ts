import { TestBed } from '@angular/core/testing';

import { BlogTagService } from './blog-tag.service';

describe('BlogTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogTagService = TestBed.get(BlogTagService);
    expect(service).toBeTruthy();
  });
});
