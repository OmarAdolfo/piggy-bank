import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaSavingComponent } from './meta-saving.component';

describe('MetaSavingComponent', () => {
  let component: MetaSavingComponent;
  let fixture: ComponentFixture<MetaSavingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaSavingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaSavingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
