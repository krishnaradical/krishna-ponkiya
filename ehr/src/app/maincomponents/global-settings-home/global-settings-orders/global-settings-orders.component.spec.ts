import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalSettingsOrdersComponent } from './global-settings-orders.component';

describe('GlobalSettingsOrdersComponent', () => {
  let component: GlobalSettingsOrdersComponent;
  let fixture: ComponentFixture<GlobalSettingsOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalSettingsOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalSettingsOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
