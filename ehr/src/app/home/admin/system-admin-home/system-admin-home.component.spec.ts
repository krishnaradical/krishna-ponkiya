import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdminHomeComponent } from './system-admin-home.component';

describe('SystemAdminHomeComponent', () => {
  let component: SystemAdminHomeComponent;
  let fixture: ComponentFixture<SystemAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
