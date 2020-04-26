import { TestBed } from '@angular/core/testing';

import { TypeSavingService } from './type-saving.service';

describe('TypeSavingService', () => {
  let service: TypeSavingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeSavingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
