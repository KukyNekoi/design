import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDetailFilesComponent } from './indicator-detail-files.component';

describe('IndicatorDetailFilesComponent', () => {
  let component: IndicatorDetailFilesComponent;
  let fixture: ComponentFixture<IndicatorDetailFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorDetailFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorDetailFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
