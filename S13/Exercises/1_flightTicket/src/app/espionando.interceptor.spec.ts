import { TestBed } from '@angular/core/testing';

import { EspionandoInterceptor } from './espionando.interceptor';

describe('EspionandoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EspionandoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EspionandoInterceptor = TestBed.inject(EspionandoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
