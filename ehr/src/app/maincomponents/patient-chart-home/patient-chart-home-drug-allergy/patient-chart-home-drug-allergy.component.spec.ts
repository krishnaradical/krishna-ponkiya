import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeDrugAllergyComponent } from './patient-chart-home-drug-allergy.component';

describe('PatientChartHomeDrugAllergyComponent', () => {
  let component: PatientChartHomeDrugAllergyComponent;
  let fixture: ComponentFixture<PatientChartHomeDrugAllergyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeDrugAllergyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeDrugAllergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
