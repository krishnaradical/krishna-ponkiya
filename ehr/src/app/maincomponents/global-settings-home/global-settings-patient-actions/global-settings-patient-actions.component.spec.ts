import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsPatientActionsComponent } from './global-settings-patient-actions.component';

describe('GlobalSettingsPatientActionsComponent', () => {
  let component: GlobalSettingsPatientActionsComponent;
  let fixture: ComponentFixture<GlobalSettingsPatientActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsPatientActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsPatientActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
