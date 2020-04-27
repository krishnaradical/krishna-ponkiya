import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeComponent } from './patient-chart-home.component';

describe('PatientChartHomeComponent', () => {
  let component: PatientChartHomeComponent;
  let fixture: ComponentFixture<PatientChartHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
