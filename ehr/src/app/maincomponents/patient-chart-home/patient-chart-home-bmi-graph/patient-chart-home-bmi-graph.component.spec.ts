import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeBmiGraphComponent } from './patient-chart-home-bmi-graph.component';

describe('PatientChartHomeBmiGraphComponent', () => {
  let component: PatientChartHomeBmiGraphComponent;
  let fixture: ComponentFixture<PatientChartHomeBmiGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeBmiGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeBmiGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
