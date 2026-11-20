import { TestBed } from '@angular/core/testing';

import { RaceStorage } from './race-storage';

describe('RaceStorage', () => {
  let service: RaceStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RaceStorage);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
