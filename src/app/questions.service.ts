import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionType, Question } from './classes/question';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionsService {

  constructor(private _http: HttpClient) { }

  private _qqq = new Array<Question>();
  private questions: Observable<Question[]> = Observable.of(this._qqq);

  getQuestions (): Observable<Question[]> {
    return this._http.get<Question[]>('/assets/app-settings/questions.json')
      .map((qqq) => {
        // setter:
        qqq.forEach(
        (x) => {
          console.log(x);
          if ( x.defaultValue || x.defaultValue === 0 ) {
          x.value = x.defaultValue;
          }
        });
        return qqq;
      });
  }

}
