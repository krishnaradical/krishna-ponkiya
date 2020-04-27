import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeGeneralAllergyComponent } from './patient-chart-home-general-allergy.component';

describe('PatientChartHomeGeneralAllergyComponent', () => {
  let component: PatientChartHomeGeneralAllergyComponent;
  let fixture: ComponentFixture<PatientChartHomeGeneralAllergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeGeneralAllergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeGeneralAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
