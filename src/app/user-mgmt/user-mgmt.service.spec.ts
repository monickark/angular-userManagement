import { TestBed, inject } from '@angular/core/testing';

import { UserMgmtService } from './user-mgmt.service';

describe('UserMgmtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserMgmtService]
    });
  });

  it('should be created', inject([UserMgmtService], (service: UserMgmtService) => {
    expect(service).toBeTruthy();
  }));
});
