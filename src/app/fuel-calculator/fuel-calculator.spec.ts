import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelCalculator } from './fuel-calculator';

describe('FuelCalculator', () => {
  let component: FuelCalculator;
  let fixture: ComponentFixture<FuelCalculator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuelCalculator],
    }).compileComponents();

    fixture = TestBed.createComponent(FuelCalculator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
