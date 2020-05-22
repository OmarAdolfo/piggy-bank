import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeExpenseDetailComponent } from './type-expense-detail.component';

describe('TypeExpenseDetailComponent', () => {
  let component: TypeExpenseDetailComponent;
  let fixture: ComponentFixture<TypeExpenseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeExpenseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeExpenseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
