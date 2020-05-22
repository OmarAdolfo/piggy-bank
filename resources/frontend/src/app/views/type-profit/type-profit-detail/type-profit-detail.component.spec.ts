import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProfitDetailComponent } from './type-profit-detail.component';

describe('TypeProfitDetailComponent', () => {
  let component: TypeProfitDetailComponent;
  let fixture: ComponentFixture<TypeProfitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeProfitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProfitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
