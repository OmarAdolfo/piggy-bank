import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaSavingDetailComponent } from './meta-saving-detail.component';

describe('MetaSavingDetailComponent', () => {
  let component: MetaSavingDetailComponent;
  let fixture: ComponentFixture<MetaSavingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaSavingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaSavingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
