import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionType, Question } from './classes/question';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { AnswersHeader } from './classes/answers-header';
import { Api } from './singletons/api';

@Injectable()
export class AnswersHeaderService {

  constructor(private _http: HttpClient) { }

  // private _hhh = new Array<AnswersHeader>();
  // private headers: Observable<AnswersHeader[]> = Observable.of(this._hhh);

  getAnswersHeaders (): Observable<AnswersHeader[]> {
    return this._http.get<AnswersHeader[]>(Api.root + Api.answersHeader_get)
    .pipe<AnswersHeader[], AnswersHeader[]>(
      tap<AnswersHeader[]>((fetchedAnswersHeaders) => {
        console.log(fetchedAnswersHeaders);
      }),
      catchError<AnswersHeader[], AnswersHeader[]>(this.handleError('GET AnswersHeaders from DATA server!', []))
    );
  }

  postAnswersHeaders (body: AnswersHeader): void {
    this._http
    .post<AnswersHeader>(Api.root + Api.answersHeader_post, body)
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
