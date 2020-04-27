import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsClinicalDocumentsComponent } from './global-settings-clinical-documents.component';

describe('GlobalSettingsClinicalDocumentsComponent', () => {
  let component: GlobalSettingsClinicalDocumentsComponent;
  let fixture: ComponentFixture<GlobalSettingsClinicalDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsClinicalDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsClinicalDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
