import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { QuestionType, Question } from './classes/question';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class QuestionsService {

  constructor(private _http: HttpClient) { }

  private _qqq = new Array<Question>();
  private questions: Observable<Question[]> = Observable.of(this._qqq);

  getQuestions (): Observable<Question[]> {
    return this._http.get<Question[]>('http://localhost:54079/api/Questions')
    .pipe<Question[], Question[]>(
      tap<Question[]>((fetchedQuestions) => {
        console.log(fetchedQuestions);
        // setter:
        fetchedQuestions.forEach(
          (x) => {
                console.log(x);
                if ( x.defaultValue || x.defaultValue === 0 ) {
                x.value = x.defaultValue;
                }
              });
            }),
        catchError<Question[], Question[]>(this.handleError('GET Questions from DATA server!', [])
        )
    );
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

