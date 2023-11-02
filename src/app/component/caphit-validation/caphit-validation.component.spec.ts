import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaphitValidationComponent } from './caphit-validation.component';

describe('CaphitValidationComponent', () => {
  let component: CaphitValidationComponent;
  let fixture: ComponentFixture<CaphitValidationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaphitValidationComponent]
    });
    fixture = TestBed.createComponent(CaphitValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
