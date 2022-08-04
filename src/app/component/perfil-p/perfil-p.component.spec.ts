import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilPComponent } from './perfil-p.component';

describe('PerfilPComponent', () => {
  let component: PerfilPComponent;
  let fixture: ComponentFixture<PerfilPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
