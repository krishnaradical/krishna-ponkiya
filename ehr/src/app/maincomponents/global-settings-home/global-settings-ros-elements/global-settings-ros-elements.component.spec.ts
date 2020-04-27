import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsRosElementsComponent } from './global-settings-ros-elements.component';

describe('GlobalSettingsRosElementsComponent', () => {
  let component: GlobalSettingsRosElementsComponent;
  let fixture: ComponentFixture<GlobalSettingsRosElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsRosElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsRosElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
