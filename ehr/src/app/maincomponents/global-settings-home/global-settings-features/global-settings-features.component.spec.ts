import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsFeaturesComponent } from './global-settings-features.component';

describe('GlobalSettingsFeaturesComponent', () => {
  let component: GlobalSettingsFeaturesComponent;
  let fixture: ComponentFixture<GlobalSettingsFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
