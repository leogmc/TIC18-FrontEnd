import { TestBed } from '@angular/core/testing';

import { AutenticaService } from './autentica.service';

describe('AutenticaService', () => {
  let service: AutenticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
