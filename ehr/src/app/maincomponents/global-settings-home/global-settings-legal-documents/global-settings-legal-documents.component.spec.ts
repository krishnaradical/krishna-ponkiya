import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsLegalDocumentsComponent } from './global-settings-legal-documents.component';

describe('GlobalSettingsLegalDocumentsComponent', () => {
  let component: GlobalSettingsLegalDocumentsComponent;
  let fixture: ComponentFixture<GlobalSettingsLegalDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsLegalDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsLegalDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
