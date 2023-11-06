import { TestBed } from '@angular/core/testing';

import { ExternalUrlHelper } from './external-url-helper';

describe('ExternalUrlHelperService', () => {
  let service: ExternalUrlHelper;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalUrlHelper);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
