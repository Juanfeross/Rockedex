/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PkmSearchService } from './pkm-search.service';

describe('Service: PkmSearch', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PkmSearchService]
    });
  });

  it('should ...', inject([PkmSearchService], (service: PkmSearchService) => {
    expect(service).toBeTruthy();
  }));
});
