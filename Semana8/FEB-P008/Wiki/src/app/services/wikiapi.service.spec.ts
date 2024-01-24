import { TestBed } from '@angular/core/testing';

import { WikiapiService } from './wikiapi.service';

describe('WikiapiService', () => {
  let service: WikiapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WikiapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
