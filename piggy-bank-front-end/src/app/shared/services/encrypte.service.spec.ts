import { TestBed } from '@angular/core/testing';

import { EncrypteService } from './encrypte.service';

describe('EncrypteService', () => {
  let service: EncrypteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncrypteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
