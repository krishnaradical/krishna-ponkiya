import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGroupAdminHomeComponent } from './customer-group-admin-home.component';

describe('CustomerGroupAdminHomeComponent', () => {
  let component: CustomerGroupAdminHomeComponent;
  let fixture: ComponentFixture<CustomerGroupAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGroupAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGroupAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
