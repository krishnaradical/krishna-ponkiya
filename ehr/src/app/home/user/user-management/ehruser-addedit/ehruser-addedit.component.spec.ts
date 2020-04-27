import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhruserAddeditComponent } from './ehruser-addedit.component';

describe('EhruserAddeditComponent', () => {
  let component: EhruserAddeditComponent;
  let fixture: ComponentFixture<EhruserAddeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhruserAddeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhruserAddeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
