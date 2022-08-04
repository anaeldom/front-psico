import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTranstornoComponent } from './add-transtorno.component';

describe('AddTranstornoComponent', () => {
  let component: AddTranstornoComponent;
  let fixture: ComponentFixture<AddTranstornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTranstornoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTranstornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
