import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsRolesComponent } from './global-settings-roles.component';

describe('GlobalSettingsRolesComponent', () => {
  let component: GlobalSettingsRolesComponent;
  let fixture: ComponentFixture<GlobalSettingsRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
