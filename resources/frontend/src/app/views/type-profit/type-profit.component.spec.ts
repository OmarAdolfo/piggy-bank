import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeProfitComponent } from './type-profit.component';

describe('TypeProfitComponent', () => {
  let component: TypeProfitComponent;
  let fixture: ComponentFixture<TypeProfitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeProfitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
