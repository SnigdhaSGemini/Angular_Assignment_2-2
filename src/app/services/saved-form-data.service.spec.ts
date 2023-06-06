import { TestBed } from '@angular/core/testing';

import { SavedFormDataService } from './saved-form-data.service';

describe('SavedFormDataService', () => {
  let service: SavedFormDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedFormDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
