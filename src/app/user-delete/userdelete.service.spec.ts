import { TestBed, inject } from '@angular/core/testing';

import { UserdeleteService } from './userdelete.service';

describe('UserdeleteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserdeleteService]
    });
  });

  it('should be created', inject([UserdeleteService], (service: UserdeleteService) => {
    expect(service).toBeTruthy();
  }));
});
