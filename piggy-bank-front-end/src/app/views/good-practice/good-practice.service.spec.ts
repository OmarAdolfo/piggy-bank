import { TestBed } from '@angular/core/testing';

import { GoodPracticeService } from './good-practice.service';

describe('GoodPracticeService', () => {
  let service: GoodPracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoodPracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
