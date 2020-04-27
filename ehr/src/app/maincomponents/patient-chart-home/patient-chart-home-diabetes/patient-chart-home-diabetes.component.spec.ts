import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeDiabetesComponent } from './patient-chart-home-diabetes.component';

describe('PatientChartHomeDiabetesComponent', () => {
  let component: PatientChartHomeDiabetesComponent;
  let fixture: ComponentFixture<PatientChartHomeDiabetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeDiabetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeDiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
