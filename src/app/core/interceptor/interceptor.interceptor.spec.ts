import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './interceptor.interceptor';

describe('Interceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptorService
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptorService = TestBed.inject(InterceptorService);
    expect(interceptor).toBeTruthy();
  });
});
