import { TestBed } from '@angular/core/testing';

import { StatSkaterService } from './stat-skater.service';

describe('StatSkaterService', () => {
  let service: StatSkaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatSkaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
