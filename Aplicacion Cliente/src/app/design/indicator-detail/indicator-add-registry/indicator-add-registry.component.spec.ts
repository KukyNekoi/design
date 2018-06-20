import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorAddRegistryComponent } from './indicator-add-registry.component';

describe('IndicatorAddRegistryComponent', () => {
  let component: IndicatorAddRegistryComponent;
  let fixture: ComponentFixture<IndicatorAddRegistryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorAddRegistryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorAddRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
