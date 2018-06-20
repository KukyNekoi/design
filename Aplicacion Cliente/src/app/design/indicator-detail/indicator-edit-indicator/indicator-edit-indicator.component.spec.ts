import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorEditIndicatorComponent } from './indicator-edit-indicator.component';

describe('IndicatorEditIndicatorComponent', () => {
  let component: IndicatorEditIndicatorComponent;
  let fixture: ComponentFixture<IndicatorEditIndicatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorEditIndicatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorEditIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
