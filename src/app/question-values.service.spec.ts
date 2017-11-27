import { TestBed, inject } from '@angular/core/testing';

import { QuestionValuesService } from './question-values.service';

describe('QuestionValuesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionValuesService]
    });
  });

  it('should be created', inject([QuestionValuesService], (service: QuestionValuesService) => {
    expect(service).toBeTruthy();
  }));
});
