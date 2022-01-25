import { TestBed } from '@angular/core/testing';

import { LoremGeneratorService } from './lorem-generator.service';

describe('LoremGeneratorService', () => {
  let service: LoremGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoremGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
