import { TestBed } from '@angular/core/testing';

import { NewsCompanyService } from './news-company.service';

describe('NewsCompnyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsCompanyService = TestBed.get(NewsCompanyService);
    expect(service).toBeTruthy();
  });
});
