import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSearchHomeComponent } from './patient-search-home.component';

describe('PatientSearchHomeComponent', () => {
  let component: PatientSearchHomeComponent;
  let fixture: ComponentFixture<PatientSearchHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSearchHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSearchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
