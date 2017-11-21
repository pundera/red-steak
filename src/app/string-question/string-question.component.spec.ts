import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringQuestionComponent } from './string-question.component';

describe('StringQuestionComponent', () => {
  let component: StringQuestionComponent;
  let fixture: ComponentFixture<StringQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StringQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
