import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsPreventiveConfigurationsComponent } from './global-settings-preventive-configurations.component';

describe('GlobalSettingsPreventiveConfigurationsComponent', () => {
  let component: GlobalSettingsPreventiveConfigurationsComponent;
  let fixture: ComponentFixture<GlobalSettingsPreventiveConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsPreventiveConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsPreventiveConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
