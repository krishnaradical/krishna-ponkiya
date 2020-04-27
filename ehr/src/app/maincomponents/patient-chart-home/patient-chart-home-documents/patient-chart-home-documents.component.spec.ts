import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeDocumentsComponent } from './patient-chart-home-documents.component';

describe('PatientChartHomeDocumentsComponent', () => {
  let component: PatientChartHomeDocumentsComponent;
  let fixture: ComponentFixture<PatientChartHomeDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
