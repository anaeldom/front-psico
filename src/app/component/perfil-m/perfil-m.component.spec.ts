import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilMComponent } from './perfil-m.component';

describe('PerfilMComponent', () => {
  let component: PerfilMComponent;
  let fixture: ComponentFixture<PerfilMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilMComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
