import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeHospitalizationsComponent } from './patient-chart-home-hospitalizations.component';

describe('PatientChartHomeHospitalizationsComponent', () => {
  let component: PatientChartHomeHospitalizationsComponent;
  let fixture: ComponentFixture<PatientChartHomeHospitalizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeHospitalizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeHospitalizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
