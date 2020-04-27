import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeFamilyHistoryComponent } from './patient-chart-home-family-history.component';

describe('PatientChartHomeFamilyHistoryComponent', () => {
  let component: PatientChartHomeFamilyHistoryComponent;
  let fixture: ComponentFixture<PatientChartHomeFamilyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeFamilyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeFamilyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
