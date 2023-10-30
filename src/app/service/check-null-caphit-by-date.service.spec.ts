import { TestBed } from '@angular/core/testing';

import { CheckNullCaphitByDateService } from './check-null-caphit-by-date.service';

describe('CheckNullCaphitByDateService', () => {
  let service: CheckNullCaphitByDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckNullCaphitByDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
