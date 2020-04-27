import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundHomeComponent } from './notfound-home.component';

describe('NotfoundHomeComponent', () => {
  let component: NotfoundHomeComponent;
  let fixture: ComponentFixture<NotfoundHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
