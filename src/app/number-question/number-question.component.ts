import { Component, Input, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Question } from '../classes/question';

@Component({
  selector: 'app-number-question',
  templateUrl: './number-question.component.html',
  styleUrls: ['./number-question.component.css']
})
export class NumberQuestionComponent implements OnInit {

  constructor() { }

  @Input('question') question: Question;

  ngOnInit() {
  }

}
