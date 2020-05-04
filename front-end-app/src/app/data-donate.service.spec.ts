import { TestBed } from '@angular/core/testing';

import { DataDonateService } from './data-donate.service';

describe('DataDonateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataDonateService = TestBed.get(DataDonateService);
    expect(service).toBeTruthy();
  });
});
