import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeImmunaizationsComponent } from './patient-chart-home-immunaizations.component';

describe('PatientChartHomeImmunaizationsComponent', () => {
  let component: PatientChartHomeImmunaizationsComponent;
  let fixture: ComponentFixture<PatientChartHomeImmunaizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeImmunaizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeImmunaizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
