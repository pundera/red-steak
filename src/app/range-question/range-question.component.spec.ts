import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeQuestionComponent } from './range-question.component';

describe('RangeQuestionComponent', () => {
  let component: RangeQuestionComponent;
  let fixture: ComponentFixture<RangeQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
