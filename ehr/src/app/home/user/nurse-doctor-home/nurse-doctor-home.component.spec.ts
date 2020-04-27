import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseDoctorHomeComponent } from './nurse-doctor-home.component';

describe('NurseDoctorHomeComponent', () => {
  let component: NurseDoctorHomeComponent;
  let fixture: ComponentFixture<NurseDoctorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NurseDoctorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NurseDoctorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
