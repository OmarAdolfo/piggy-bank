import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsManagementComponent } from './savings-management.component';

describe('SavingsManagementComponent', () => {
  let component: SavingsManagementComponent;
  let fixture: ComponentFixture<SavingsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
