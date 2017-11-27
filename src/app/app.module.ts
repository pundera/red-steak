import { QuestionValuesService } from './question-values.service';
import { NgModule } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {DataSource} from '@angular/cdk/collections';
import {CdkTableModule} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { MatTabsModule, MatTableModule } from '@angular/material';
import { MatButtonToggleModule, MatHeaderRow, MatRowDef, MatHeaderRowDef } from '@angular/material';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';

import { NumberQuestionComponent } from './number-question/number-question.component';
import { ListQuestionComponent } from './list-question/list-question.component';
import { StringQuestionComponent } from './string-question/string-question.component';
import { YesnoQuestionComponent } from './yesno-question/yesno-question.component';
import { RangeQuestionComponent } from './range-question/range-question.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionsService } from './questions.service';
import { AnswersHeaderService } from './answers-header.service';
import { HeaderListComponent } from './header-list/header-list.component';
import { HeaderListDetailComponent } from './header-list-detail/header-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberQuestionComponent,
    ListQuestionComponent,
    StringQuestionComponent,
    YesnoQuestionComponent,
    RangeQuestionComponent,
    QuestionsComponent,
    HeaderListComponent,
    HeaderListDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    MatTableModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  entryComponents:   [ HeaderListDetailComponent ],
  providers: [
    QuestionsService,
    QuestionValuesService,
    AnswersHeaderService,
    {
      provide: LOCALE_ID,
      useValue: 'cs-CZ'
    }],
  bootstrap: [AppComponent]
})

export class AppModule {}
