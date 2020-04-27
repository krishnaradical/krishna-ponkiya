import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeDiabetesGraphComponent } from './patient-chart-home-diabetes-graph.component';

describe('PatientChartHomeDiabetesGraphComponent', () => {
  let component: PatientChartHomeDiabetesGraphComponent;
  let fixture: ComponentFixture<PatientChartHomeDiabetesGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeDiabetesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeDiabetesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
