import { Question } from '../classes/question';
import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-list-question',
  templateUrl: './list-question.component.html',
  styleUrls: ['./list-question.component.css']
})
export class ListQuestionComponent implements OnInit {

  constructor() { }

  @Input('question') question: Question;
  @Input('vertical') vertical: boolean;

  ngOnInit() {
  }

}
