import { TestBed } from '@angular/core/testing';

import { DateRangeServiceService } from './date-range-service.service';

describe('DateRangeServiceService', () => {
  let service: DateRangeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateRangeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
