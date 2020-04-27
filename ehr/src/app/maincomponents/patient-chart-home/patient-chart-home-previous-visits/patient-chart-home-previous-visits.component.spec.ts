import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomePreviousVisitsComponent } from './patient-chart-home-previous-visits.component';

describe('PatientChartHomePreviousVisitsComponent', () => {
  let component: PatientChartHomePreviousVisitsComponent;
  let fixture: ComponentFixture<PatientChartHomePreviousVisitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomePreviousVisitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomePreviousVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
