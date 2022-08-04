import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMedicoComponent } from './view-medico.component';

describe('ViewMedicoComponent', () => {
  let component: ViewMedicoComponent;
  let fixture: ComponentFixture<ViewMedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
