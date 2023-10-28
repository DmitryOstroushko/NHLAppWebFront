import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckNullCaphitBySeasonComponent } from './check-null-caphit-by-season.component';

describe('CheckNullCaphitBySeasonComponent', () => {
  let component: CheckNullCaphitBySeasonComponent;
  let fixture: ComponentFixture<CheckNullCaphitBySeasonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckNullCaphitBySeasonComponent]
    });
    fixture = TestBed.createComponent(CheckNullCaphitBySeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
