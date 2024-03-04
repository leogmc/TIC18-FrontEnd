import { TestBed } from '@angular/core/testing';

import { AutenticaInterceptor } from './autentica.interceptor';

describe('AutenticaInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutenticaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutenticaInterceptor = TestBed.inject(AutenticaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
