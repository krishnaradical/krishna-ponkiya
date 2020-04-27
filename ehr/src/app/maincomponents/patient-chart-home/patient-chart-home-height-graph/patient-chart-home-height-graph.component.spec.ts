import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeHeightGraphComponent } from './patient-chart-home-height-graph.component';

describe('PatientChartHomeHeightGraphComponent', () => {
  let component: PatientChartHomeHeightGraphComponent;
  let fixture: ComponentFixture<PatientChartHomeHeightGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeHeightGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeHeightGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
