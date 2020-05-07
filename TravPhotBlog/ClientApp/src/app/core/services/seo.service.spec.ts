import { TestBed } from '@angular/core/testing';

import { SeoService } from './seo.service';

describe('SeoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeoService = TestBed.get(SeoService);
    expect(service).toBeTruthy();
  });
});
