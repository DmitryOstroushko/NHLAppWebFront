import { TestBed } from '@angular/core/testing';

import { TeamRosterService } from './team-roster.service';

describe('TeamRosterService', () => {
  let service: TeamRosterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamRosterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
