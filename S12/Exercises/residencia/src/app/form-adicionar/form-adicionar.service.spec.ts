import { TestBed } from '@angular/core/testing';

import { FormAdicionarService } from './form-adicionar.service';

describe('FormAdicionarService', () => {
  let service: FormAdicionarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAdicionarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
