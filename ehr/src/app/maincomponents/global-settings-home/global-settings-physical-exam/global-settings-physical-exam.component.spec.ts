import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsPhysicalExamComponent } from './global-settings-physical-exam.component';

describe('GlobalSettingsPhysicalExamComponent', () => {
  let component: GlobalSettingsPhysicalExamComponent;
  let fixture: ComponentFixture<GlobalSettingsPhysicalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsPhysicalExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsPhysicalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
