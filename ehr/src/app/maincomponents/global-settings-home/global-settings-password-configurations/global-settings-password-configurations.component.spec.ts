import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsPasswordConfigurationsComponent } from './global-settings-password-configurations.component';

describe('GlobalSettingsPasswordConfigurationsComponent', () => {
  let component: GlobalSettingsPasswordConfigurationsComponent;
  let fixture: ComponentFixture<GlobalSettingsPasswordConfigurationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsPasswordConfigurationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsPasswordConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
