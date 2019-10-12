import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceInformationPage } from './device-information.page';

describe('DeviceInformationPage', () => {
  let component: DeviceInformationPage;
  let fixture: ComponentFixture<DeviceInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
