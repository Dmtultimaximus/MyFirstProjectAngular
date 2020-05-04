import { TestBed } from '@angular/core/testing';

import { DonateResolverService } from './donate-resolver.service';

describe('DonateResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DonateResolverService = TestBed.get(DonateResolverService);
    expect(service).toBeTruthy();
  });
});
