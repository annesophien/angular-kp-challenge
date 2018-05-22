import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTypeEditComponent } from './staff-type-edit.component';

describe('StaffTypeEditComponent', () => {
  let component: StaffTypeEditComponent;
  let fixture: ComponentFixture<StaffTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
