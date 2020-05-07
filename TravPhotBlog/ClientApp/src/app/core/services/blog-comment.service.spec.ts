import { TestBed } from '@angular/core/testing';

import { BlogCommentService } from './blog-comment.service';

describe('BlogCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogCommentService = TestBed.get(BlogCommentService);
    expect(service).toBeTruthy();
  });
});
