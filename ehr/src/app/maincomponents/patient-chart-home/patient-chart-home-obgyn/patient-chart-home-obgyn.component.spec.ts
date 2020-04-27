import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeObgynComponent } from './patient-chart-home-obgyn.component';

describe('PatientChartHomeObgynComponent', () => {
  let component: PatientChartHomeObgynComponent;
  let fixture: ComponentFixture<PatientChartHomeObgynComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeObgynComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeObgynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
