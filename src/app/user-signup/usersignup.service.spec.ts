import { TestBed, inject } from '@angular/core/testing';

import { UsersignupService } from './usersignup.service';

describe('UsersignupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersignupService]
    });
  });

  it('should be created', inject([UsersignupService], (service: UsersignupService) => {
    expect(service).toBeTruthy();
  }));
});
