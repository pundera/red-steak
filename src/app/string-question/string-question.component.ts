import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../classes/question';

@Component({
  selector: 'app-string-question',
  templateUrl: './string-question.component.html',
  styleUrls: ['./string-question.component.css']
})
export class StringQuestionComponent implements OnInit {

  constructor() { }

  @Input('question') question: Question;

  ngOnInit() {
  }

}
