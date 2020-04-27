import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsHpiElementsComponent } from './global-settings-hpi-elements.component';

describe('GlobalSettingsHpiElementsComponent', () => {
  let component: GlobalSettingsHpiElementsComponent;
  let fixture: ComponentFixture<GlobalSettingsHpiElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsHpiElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsHpiElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
