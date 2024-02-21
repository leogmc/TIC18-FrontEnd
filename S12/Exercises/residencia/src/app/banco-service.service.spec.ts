import { TestBed } from '@angular/core/testing';

import { BancoServiceService } from './banco-service.service';

describe('BancoServiceService', () => {
  let service: BancoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
