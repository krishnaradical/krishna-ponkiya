import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomergroupAddeditComponent } from './customergroup-addedit.component';

describe('CustomergroupAddeditComponent', () => {
  let component: CustomergroupAddeditComponent;
  let fixture: ComponentFixture<CustomergroupAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomergroupAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomergroupAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
