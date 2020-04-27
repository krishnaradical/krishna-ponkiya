import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsEhrPropertiesComponent } from './global-settings-ehr-properties.component';

describe('GlobalSettingsEhrPropertiesComponent', () => {
  let component: GlobalSettingsEhrPropertiesComponent;
  let fixture: ComponentFixture<GlobalSettingsEhrPropertiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsEhrPropertiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsEhrPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
