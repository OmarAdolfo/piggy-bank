import { TestBed } from '@angular/core/testing';

import { TypeProfitService } from './type-profit.service';

describe('TypeProfitService', () => {
  let service: TypeProfitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeProfitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
