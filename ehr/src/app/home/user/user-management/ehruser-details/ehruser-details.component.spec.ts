import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhruserDetailsComponent } from './ehruser-details.component';

describe('EhruserDetailsComponent', () => {
  let component: EhruserDetailsComponent;
  let fixture: ComponentFixture<EhruserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhruserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhruserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
