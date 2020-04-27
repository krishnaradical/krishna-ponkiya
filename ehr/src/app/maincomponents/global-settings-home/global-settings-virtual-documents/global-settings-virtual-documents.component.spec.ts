import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsVirtualDocumentsComponent } from './global-settings-virtual-documents.component';

describe('GlobalSettingsVirtualDocumentsComponent', () => {
  let component: GlobalSettingsVirtualDocumentsComponent;
  let fixture: ComponentFixture<GlobalSettingsVirtualDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsVirtualDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsVirtualDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
