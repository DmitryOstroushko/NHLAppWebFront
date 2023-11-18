import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatSkaterComponent } from './stat-skater.component';

describe('StatSkaterComponent', () => {
  let component: StatSkaterComponent;
  let fixture: ComponentFixture<StatSkaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatSkaterComponent]
    });
    fixture = TestBed.createComponent(StatSkaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
