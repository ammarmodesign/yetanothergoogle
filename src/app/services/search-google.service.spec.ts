import { TestBed } from '@angular/core/testing';

import { SearchGoogleService } from './search-google.service';

describe('SearchGoogleService', () => {
  let service: SearchGoogleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchGoogleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
