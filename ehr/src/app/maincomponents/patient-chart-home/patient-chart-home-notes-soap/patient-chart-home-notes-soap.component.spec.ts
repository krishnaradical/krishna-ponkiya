import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeNotesSoapComponent } from './patient-chart-home-notes-soap.component';

describe('PatientChartHomeNotesSoapComponent', () => {
  let component: PatientChartHomeNotesSoapComponent;
  let fixture: ComponentFixture<PatientChartHomeNotesSoapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeNotesSoapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeNotesSoapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
