import { TestBed } from '@angular/core/testing';

import { LippuSService } from './lippu-s.service';

describe('LippuSService', () => {
  let service: LippuSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LippuSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
