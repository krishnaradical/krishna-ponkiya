import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemAdminHomeCustomerGroupManagementComponent } from './system-admin-home-customer-group-management.component';

describe('SystemAdminHomeCustomerGroupManagementComponent', () => {
  let component: SystemAdminHomeCustomerGroupManagementComponent;
  let fixture: ComponentFixture<SystemAdminHomeCustomerGroupManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemAdminHomeCustomerGroupManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemAdminHomeCustomerGroupManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
