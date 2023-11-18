import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckNullPersonalDataComponent } from './check-null-personal-data.component';

describe('CheckNullPersonalDataComponent', () => {
  let component: CheckNullPersonalDataComponent;
  let fixture: ComponentFixture<CheckNullPersonalDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckNullPersonalDataComponent]
    });
    fixture = TestBed.createComponent(CheckNullPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
