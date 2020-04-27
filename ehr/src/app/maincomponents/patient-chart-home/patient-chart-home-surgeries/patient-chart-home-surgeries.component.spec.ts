import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientChartHomeSurgeriesComponent } from './patient-chart-home-surgeries.component';

describe('PatientChartHomeSurgeriesComponent', () => {
  let component: PatientChartHomeSurgeriesComponent;
  let fixture: ComponentFixture<PatientChartHomeSurgeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientChartHomeSurgeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientChartHomeSurgeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
