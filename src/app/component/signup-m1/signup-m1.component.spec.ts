import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupM1Component } from './signup-m1.component';

describe('SignupM1Component', () => {
  let component: SignupM1Component;
  let fixture: ComponentFixture<SignupM1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupM1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupM1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
