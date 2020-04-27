import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EhrFooterComponent } from './ehr-footer.component';

describe('EhrFooterComponent', () => {
  let component: EhrFooterComponent;
  let fixture: ComponentFixture<EhrFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EhrFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EhrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
