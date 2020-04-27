import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeMedicationsComponent } from './patient-chart-home-medications.component';

describe('PatientChartHomeMedicationsComponent', () => {
  let component: PatientChartHomeMedicationsComponent;
  let fixture: ComponentFixture<PatientChartHomeMedicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeMedicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
