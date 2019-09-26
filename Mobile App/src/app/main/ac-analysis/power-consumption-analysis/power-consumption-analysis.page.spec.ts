import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerConsumptionAnalysisPage } from './power-consumption-analysis.page';

describe('PowerConsumptionAnalysisPage', () => {
  let component: PowerConsumptionAnalysisPage;
  let fixture: ComponentFixture<PowerConsumptionAnalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerConsumptionAnalysisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerConsumptionAnalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
