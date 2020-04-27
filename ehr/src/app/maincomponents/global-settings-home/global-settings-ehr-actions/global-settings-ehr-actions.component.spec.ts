import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsEhrActionsComponent } from './global-settings-ehr-actions.component';

describe('GlobalSettingsEhrActionsComponent', () => {
  let component: GlobalSettingsEhrActionsComponent;
  let fixture: ComponentFixture<GlobalSettingsEhrActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsEhrActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsEhrActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
