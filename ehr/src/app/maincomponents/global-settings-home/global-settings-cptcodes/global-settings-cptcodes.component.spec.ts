import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsCptcodesComponent } from './global-settings-cptcodes.component';

describe('GlobalSettingsCptcodesComponent', () => {
  let component: GlobalSettingsCptcodesComponent;
  let fixture: ComponentFixture<GlobalSettingsCptcodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsCptcodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsCptcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
