import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAntecedentesComponent } from './list-antecedentes.component';

describe('ListAntecedentesComponent', () => {
  let component: ListAntecedentesComponent;
  let fixture: ComponentFixture<ListAntecedentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAntecedentesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAntecedentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
