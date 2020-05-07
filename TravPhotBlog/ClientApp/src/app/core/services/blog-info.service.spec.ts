import { TestBed } from '@angular/core/testing';

import { BlogInfoService } from './blog-info.service';

describe('BlogInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogInfoService = TestBed.get(BlogInfoService);
    expect(service).toBeTruthy();
  });
});
