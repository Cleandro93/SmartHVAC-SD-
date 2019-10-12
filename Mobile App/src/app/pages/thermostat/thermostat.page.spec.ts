import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermostatPage } from './thermostat.page';

describe('ThermostatPage', () => {
  let component: ThermostatPage;
  let fixture: ComponentFixture<ThermostatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThermostatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThermostatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
