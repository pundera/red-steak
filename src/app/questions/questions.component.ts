import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

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

  public initDone = false;

  @ViewChild('filter') filter: ElementRef;

  constructor(private service: QuestionsService) {
  }

  ngOnInit() {
    this.dataSource = new QuestionsDataSource(this.service);
    if (this.dataSource) {
      this.initDone = true;
    }
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

  constructor(private service: QuestionsService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Question[]> {
    const obs = this.service.getQuestions();
    return  obs.map((data) => data).catch(e => Observable.of(new Array<Question>()));
  }

  disconnect() {}
}
