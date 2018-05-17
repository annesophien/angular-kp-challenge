import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerPhoneComponent } from './computer-phone.component';

describe('ComputerPhoneComponent', () => {
  let component: ComputerPhoneComponent;
  let fixture: ComponentFixture<ComputerPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
