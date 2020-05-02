import { TestBed } from '@angular/core/testing';

import { MetaSavingService } from './meta-saving.service';

describe('MetaSavingService', () => {
  let service: MetaSavingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetaSavingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
