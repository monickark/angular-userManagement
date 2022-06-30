import { TestBed, inject } from '@angular/core/testing';

import { UserdonationService } from './userdonation.service';

describe('UserdonationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserdonationService]
    });
  });

  it('should be created', inject([UserdonationService], (service: UserdonationService) => {
    expect(service).toBeTruthy();
  }));
});
