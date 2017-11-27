import { TestBed, inject } from '@angular/core/testing';

import { AnswersHeaderService } from './answers-header.service';

describe('AnswersHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnswersHeaderService]
    });
  });

  it('should be created', inject([AnswersHeaderService], (service: AnswersHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
