import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DateAdapter, NativeDateAdapter } from '@angular/material';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { QuestionsService } from '../questions.service';
import { Question, QuestionType } from '../classes/question';
import { StringQuestionComponent } from '../string-question/string-question.component';
import { NumberQuestionComponent } from '../number-question/number-question.component';
import { ListQuestionComponent } from '../list-question/list-question.component';
import { RangeQuestionComponent } from '../range-question/range-question.component';
import { YesnoQuestionComponent } from '../yesno-question/yesno-question.component';
import { QuestionValuesService } from '../question-values.service';
import { QuestionValue } from '../classes/question-value';
import { AnswersHeader } from '../classes/answers-header';
import { AnswersHeaderService } from '../answers-header.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: Question[];
  qType: QuestionType;

  number: QuestionType = QuestionType.Number;
  text: QuestionType = QuestionType.String;
  list: QuestionType = QuestionType.List;
  yesno: QuestionType = QuestionType.YesNo;
  range: QuestionType = QuestionType.Range;

  displayedColumns = ['number', 'header', 'component'];
  dataSource: QuestionsDataSource | null;

  // bindings -->
  public initDone = false;
  public isUpdated = false;

  public header: AnswersHeader;

  @ViewChild('filter') filter: ElementRef;

  constructor(
    private serviceQuestions: QuestionsService,
    private serviceAnswersHeader: AnswersHeaderService,
    dateAdapter: DateAdapter<NativeDateAdapter>) {
    this.header = new AnswersHeader(null, new Date(Date.now()), new Date(Date.now()), null, new Array<QuestionValue>());
    dateAdapter.setLocale('cs-CZ');
  }

  ngOnInit() {

    this.dataSource = new QuestionsDataSource(this.serviceQuestions);
    if (this.dataSource) {
      this.initDone = true;
    }

    if (!this.isUpdated) {
      this.header.created = new Date(Date.now());
    }
    this.header.updated = new Date(Date.now());
  }

  onSubmit() {
    this.dataSource.data.subscribe((qs) => {
      const body = new AnswersHeader(
        null,
        this.header.created,
        this.header.updated,
        this.header.note,
        new Array<QuestionValue>());
      qs.forEach((q) => body.questionValues.push(new QuestionValue(null, q, q.value)));
      console.log(body);
      this.serviceAnswersHeader.postAnswersHeaders(body);
      // new id! -->
      this.header.id = body.id;
    }, (e) => {}, () => {});
  }


}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class QuestionsDataSource extends DataSource<Question> {

  public initDone = false;
  public data: Observable<Question[]>;

  constructor(private service: QuestionsService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Question[]> {
    const obs = this.service.getQuestions();
    const questions = obs.map((data) => data).catch(e => Observable.of(new Array<Question>()));
    this.data = questions;
    return questions;
  }

  disconnect() {}
}
