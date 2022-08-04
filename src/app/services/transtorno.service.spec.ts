import { TestBed } from '@angular/core/testing';

import { TranstornoService } from './transtorno.service';

describe('TranstornoService', () => {
  let service: TranstornoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranstornoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
