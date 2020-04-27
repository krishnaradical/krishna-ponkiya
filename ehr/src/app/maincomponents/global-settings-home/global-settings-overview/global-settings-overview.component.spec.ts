import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsOverviewComponent } from './global-settings-overview.component';

describe('GlobalSettingsOverviewComponent', () => {
  let component: GlobalSettingsOverviewComponent;
  let fixture: ComponentFixture<GlobalSettingsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
