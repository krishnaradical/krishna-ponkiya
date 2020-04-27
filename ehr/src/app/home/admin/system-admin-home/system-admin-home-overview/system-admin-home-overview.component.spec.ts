import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdminHomeOverviewComponent } from './system-admin-home-overview.component';

describe('SystemAdminHomeOverviewComponent', () => {
  let component: SystemAdminHomeOverviewComponent;
  let fixture: ComponentFixture<SystemAdminHomeOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAdminHomeOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAdminHomeOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
