import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomergroupDetailsComponent } from './customergroup-details.component';

describe('CustomergroupDetailsComponent', () => {
  let component: CustomergroupDetailsComponent;
  let fixture: ComponentFixture<CustomergroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomergroupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomergroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
