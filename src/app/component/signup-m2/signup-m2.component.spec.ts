import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupM2Component } from './signup-m2.component';

describe('SignupM2Component', () => {
  let component: SignupM2Component;
  let fixture: ComponentFixture<SignupM2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupM2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupM2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
