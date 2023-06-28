import { TestBed } from '@angular/core/testing';

import { CurrentStaticDataService } from './current-static-data.service';

describe('CurrentStaticDataService', () => {
  let service: CurrentStaticDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentStaticDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
