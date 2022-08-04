import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupP1Component } from './signup-p1.component';

describe('SignupP1Component', () => {
  let component: SignupP1Component;
  let fixture: ComponentFixture<SignupP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupP1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
