import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffTypeAddComponent } from './staff-type-add.component';

describe('StaffTypeAddComponent', () => {
  let component: StaffTypeAddComponent;
  let fixture: ComponentFixture<StaffTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
