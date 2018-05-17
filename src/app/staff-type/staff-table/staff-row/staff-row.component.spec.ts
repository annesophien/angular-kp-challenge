import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRowComponent } from './staff-row.component';

describe('StaffRowComponent', () => {
  let component: StaffRowComponent;
  let fixture: ComponentFixture<StaffRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
