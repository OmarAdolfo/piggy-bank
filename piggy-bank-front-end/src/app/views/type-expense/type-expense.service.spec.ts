import { TestBed } from '@angular/core/testing';

import { TypeExpenseService } from './type-expense.service';

describe('TypeExpenseServiceService', () => {
  let service: TypeExpenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeExpenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
