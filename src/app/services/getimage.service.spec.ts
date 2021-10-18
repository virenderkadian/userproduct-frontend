import { TestBed } from '@angular/core/testing';

import { GetimageService } from './getimage.service';

describe('GetimageService', () => {
  let service: GetimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
