import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckNullCaphitByDateComponent } from './check-null-caphit-by-date.component';

describe('CheckNullCaphitByDateComponent', () => {
  let component: CheckNullCaphitByDateComponent;
  let fixture: ComponentFixture<CheckNullCaphitByDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckNullCaphitByDateComponent]
    });
    fixture = TestBed.createComponent(CheckNullCaphitByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
