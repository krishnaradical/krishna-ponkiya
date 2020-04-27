import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsHomeComponent } from './global-settings-home.component';

describe('GlobalSettingsHomeComponent', () => {
  let component: GlobalSettingsHomeComponent;
  let fixture: ComponentFixture<GlobalSettingsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
