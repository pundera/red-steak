import { Question } from '../classes/question';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-yesno-question',
  templateUrl: './yesno-question.component.html',
  styleUrls: ['./yesno-question.component.css']
})
export class YesnoQuestionComponent implements OnInit {

  constructor() { }

  @Input('question') question: Question;

  ngOnInit() {
  }

}
