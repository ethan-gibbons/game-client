import { TestBed } from '@angular/core/testing';

import { BraincloudService } from './braincloud.service';

describe('BraincloudService', () => {
  let service: BraincloudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BraincloudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
