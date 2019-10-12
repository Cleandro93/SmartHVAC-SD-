import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentAnalysisPage } from './current-analysis.page';

describe('CurrentAnalysisPage', () => {
  let component: CurrentAnalysisPage;
  let fixture: ComponentFixture<CurrentAnalysisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentAnalysisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentAnalysisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
