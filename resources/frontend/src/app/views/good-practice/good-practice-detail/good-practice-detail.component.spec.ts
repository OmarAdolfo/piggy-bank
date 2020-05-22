import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodPracticeDetailComponent } from './good-practice-detail.component';

describe('GoodPracticeDetailComponent', () => {
  let component: GoodPracticeDetailComponent;
  let fixture: ComponentFixture<GoodPracticeDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodPracticeDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodPracticeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
