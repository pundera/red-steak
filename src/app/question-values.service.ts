import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionType, Question } from './classes/question';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { QuestionValue } from './classes/question-value';

@Injectable()
export class QuestionValuesService {

  constructor(private _http: HttpClient) { }

  // private _qqq = new Array<QuestionValue>();
  // private questions: Observable<QuestionValue[]> = Observable.of(this._qqq);

  getQuestionValues (): Observable<QuestionValue[]> {
    return this._http.get<QuestionValue[]>('http://localhost:54079/api/QuestionValues')
    .pipe<QuestionValue[], QuestionValue[]>(
      tap<QuestionValue[]>((fetchedQuestionValues) => {
        console.log(fetchedQuestionValues);
      }),
      catchError<QuestionValue[], QuestionValue[]>(this.handleError('GET QuestionValues from DATA server!', []))
    );
  }

  postQuestionValues (body: QuestionValue): void {
    this._http
    .post<QuestionValue>('http://localhost:54079/api/QuestionValues', body)
    .subscribe((b) => { body = b; }, (err) => {}, () => {});
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return Observable.of(result as T);
    };
  }
}

