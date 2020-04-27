import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityAdminHomeComponent } from './facility-admin-home.component';

describe('FacilityAdminHomeComponent', () => {
  let component: FacilityAdminHomeComponent;
  let fixture: ComponentFixture<FacilityAdminHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityAdminHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityAdminHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
