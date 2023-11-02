import { TestBed } from '@angular/core/testing';

import { CaphitValidationService } from './caphit-validation.service';

describe('CaphitValidationService', () => {
  let service: CaphitValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaphitValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
