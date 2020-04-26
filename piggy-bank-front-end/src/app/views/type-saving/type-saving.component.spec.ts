import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeSavingComponent } from './type-saving.component';

describe('TypeSavingComponent', () => {
  let component: TypeSavingComponent;
  let fixture: ComponentFixture<TypeSavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeSavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
