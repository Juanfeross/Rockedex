import { TestBed } from '@angular/core/testing';

import { PkmService } from './pkm.service';

describe('PkmService', () => {
  let service: PkmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
