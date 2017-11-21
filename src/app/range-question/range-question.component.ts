import { Question } from '../classes/question';
import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-range-question',
  templateUrl: './range-question.component.html',
  styleUrls: ['./range-question.component.css']
})
export class RangeQuestionComponent implements OnInit {

  constructor() { }

  @Input('question') question: Question;
  @Input('vertical') vertical: boolean;

  ngOnInit() {
  }

}
