import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDateFilterComponent } from './indicator-date-filter.component';

describe('IndicatorDateFilterComponent', () => {
  let component: IndicatorDateFilterComponent;
  let fixture: ComponentFixture<IndicatorDateFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorDateFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorDateFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
