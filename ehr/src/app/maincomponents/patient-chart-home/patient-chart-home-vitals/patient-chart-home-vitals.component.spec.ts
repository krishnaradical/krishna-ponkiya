import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeVitalsComponent } from './patient-chart-home-vitals.component';

describe('PatientChartHomeVitalsComponent', () => {
  let component: PatientChartHomeVitalsComponent;
  let fixture: ComponentFixture<PatientChartHomeVitalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeVitalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeVitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
