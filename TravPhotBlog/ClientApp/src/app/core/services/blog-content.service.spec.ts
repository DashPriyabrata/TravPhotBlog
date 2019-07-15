import { TestBed } from '@angular/core/testing';

import { BlogContentService } from './blog-content.service';

describe('BlogContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogContentService = TestBed.get(BlogContentService);
    expect(service).toBeTruthy();
  });
});
