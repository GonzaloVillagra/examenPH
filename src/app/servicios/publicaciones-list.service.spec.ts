import { TestBed } from '@angular/core/testing';

import { PublicacionesListService } from './publicaciones-list.service';

describe('PublicacionesListService', () => {
  let service: PublicacionesListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacionesListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
