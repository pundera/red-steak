import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';

import { DateAdapter, NativeDateAdapter } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import { StringQuestionComponent } from '../string-question/string-question.component';
import { NumberQuestionComponent } from '../number-question/number-question.component';
import { ListQuestionComponent } from '../list-question/list-question.component';
import { RangeQuestionComponent } from '../range-question/range-question.component';
import { YesnoQuestionComponent } from '../yesno-question/yesno-question.component';
import { QuestionValuesService } from '../question-values.service';
import { QuestionValue } from '../classes/question-value';
import { AnswersHeader } from '../classes/answers-header';
import { AnswersHeaderService } from '../answers-header.service';
import { HeaderListDetailComponent } from '../header-list-detail/header-list-detail.component';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.css']
})
export class HeaderListComponent implements OnInit {

  displayedColumns = ['created', 'updated', 'note', 'detail'];
  dataSource: HeaderListDataSource | null;

  // bindings -->
  public initDone = false;
  public isUpdated = false;

  constructor(
    private serviceAnswersHeader: AnswersHeaderService,
    public dialog: MatDialog) {
  }

  ngOnInit() {

    this.dataSource = new HeaderListDataSource(this.serviceAnswersHeader);
    if (this.dataSource) {
      this.initDone = true;
    }
  }

  public detail(header): void {
    console.log(header);

    const dialogRef = this.dialog.open(HeaderListDetailComponent, {
      data: { header: header }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      header = result;
    });

  }

  public refresh(): void {
    this.dataSource = new HeaderListDataSource(this.serviceAnswersHeader);
  }
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class HeaderListDataSource extends DataSource<AnswersHeader> {

  public initDone = false;
  public data: Observable<AnswersHeader[]>;

  constructor(private service: AnswersHeaderService) {
    super();
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<AnswersHeader[]> {
    const obs = this.service.getAnswersHeaders();
    const header = obs.map((data) => data).catch(e => Observable.of(new Array<AnswersHeader>()));
    this.data = header;

    return header;
  }

  disconnect() {}
}
