import { TestBed } from '@angular/core/testing';

import { PkmFavoritesService } from './pkm-favorites.service';

describe('PkmFavoritesService', () => {
  let service: PkmFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PkmFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
