import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAntecedentesComponent } from './add-antecedentes.component';

describe('AddAntecedentesComponent', () => {
  let component: AddAntecedentesComponent;
  let fixture: ComponentFixture<AddAntecedentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAntecedentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAntecedentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
