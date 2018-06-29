import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorEditMetaComponent } from './indicator-edit-meta.component';

describe('IndicatorEditMetaComponent', () => {
  let component: IndicatorEditMetaComponent;
  let fixture: ComponentFixture<IndicatorEditMetaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorEditMetaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorEditMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
