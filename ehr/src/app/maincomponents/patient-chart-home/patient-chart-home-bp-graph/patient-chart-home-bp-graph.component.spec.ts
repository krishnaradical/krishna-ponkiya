import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeBpGraphComponent } from './patient-chart-home-bp-graph.component';

describe('PatientChartHomeBpGraphComponent', () => {
  let component: PatientChartHomeBpGraphComponent;
  let fixture: ComponentFixture<PatientChartHomeBpGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeBpGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeBpGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
