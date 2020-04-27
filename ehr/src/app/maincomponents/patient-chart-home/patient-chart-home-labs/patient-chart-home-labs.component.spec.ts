import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeLabsComponent } from './patient-chart-home-labs.component';

describe('PatientChartHomeLabsComponent', () => {
  let component: PatientChartHomeLabsComponent;
  let fixture: ComponentFixture<PatientChartHomeLabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeLabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeLabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
