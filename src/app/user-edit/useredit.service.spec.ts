import { TestBed, inject } from '@angular/core/testing';

import { UsereditService } from './useredit.service';

describe('UsereditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsereditService]
    });
  });

  it('should be created', inject([UsereditService], (service: UsereditService) => {
    expect(service).toBeTruthy();
  }));
});
