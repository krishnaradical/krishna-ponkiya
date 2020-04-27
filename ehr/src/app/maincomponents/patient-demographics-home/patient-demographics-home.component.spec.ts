import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDemographicsHomeComponent } from './patient-demographics-home.component';

describe('PatientDemographicsHomeComponent', () => {
  let component: PatientDemographicsHomeComponent;
  let fixture: ComponentFixture<PatientDemographicsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientDemographicsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDemographicsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
