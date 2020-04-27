import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhrHeaderComponent } from './ehr-header.component';

describe('EhrHeaderComponent', () => {
  let component: EhrHeaderComponent;
  let fixture: ComponentFixture<EhrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
