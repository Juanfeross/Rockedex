/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PkmLoadingService } from './pkm-loading.service';

describe('Service: PkmLoading', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PkmLoadingService]
    });
  });

  it('should ...', inject([PkmLoadingService], (service: PkmLoadingService) => {
    expect(service).toBeTruthy();
  }));
});
