import { TestBed } from '@angular/core/testing';

import { CheckNullPersonalDataService } from './check-null-personal-data.service';

describe('CheckNullPersonalDataService', () => {
  let service: CheckNullPersonalDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckNullPersonalDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
