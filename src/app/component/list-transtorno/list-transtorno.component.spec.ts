import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTranstornoComponent } from './list-transtorno.component';

describe('ListTranstornoComponent', () => {
  let component: ListTranstornoComponent;
  let fixture: ComponentFixture<ListTranstornoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTranstornoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTranstornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
