import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeProblemsComponent } from './patient-chart-home-problems.component';

describe('PatientChartHomeProblemsComponent', () => {
  let component: PatientChartHomeProblemsComponent;
  let fixture: ComponentFixture<PatientChartHomeProblemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeProblemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeProblemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
