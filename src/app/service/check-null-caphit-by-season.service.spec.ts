import { TestBed } from '@angular/core/testing';
import { CheckNullCaphitBySeasonService } from './check-null-caphit-by-season.service';

describe('CheckNullCaphitBySeasonService', () => {
  let service: CheckNullCaphitBySeasonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckNullCaphitBySeasonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
