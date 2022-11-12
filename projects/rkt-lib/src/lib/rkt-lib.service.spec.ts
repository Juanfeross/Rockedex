import { TestBed } from '@angular/core/testing';

import { RktLibService } from './rkt-lib.service';

describe('RktLibService', () => {
  let service: RktLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RktLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
