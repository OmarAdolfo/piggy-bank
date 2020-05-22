import { TestBed } from '@angular/core/testing';

import { MonthServiceService } from './month-service.service';

describe('MonthServiceService', () => {
  let service: MonthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
