import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardaGuard } from './guarda.guard';

describe('guardaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
