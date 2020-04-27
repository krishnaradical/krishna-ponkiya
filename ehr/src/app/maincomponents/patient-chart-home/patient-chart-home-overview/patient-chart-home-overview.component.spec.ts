import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeOverviewComponent } from './patient-chart-home-overview.component';

describe('PatientChartHomeOverviewComponent', () => {
  let component: PatientChartHomeOverviewComponent;
  let fixture: ComponentFixture<PatientChartHomeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
