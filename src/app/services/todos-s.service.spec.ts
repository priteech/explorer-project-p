import { TestBed } from '@angular/core/testing';

import { TodosSService } from './todos-s.service';

describe('TodosSService', () => {
  let service: TodosSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodosSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
