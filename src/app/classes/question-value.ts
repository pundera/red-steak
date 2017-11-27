import { AnswersHeader } from './answers-header';
import { Question } from './question';
export class QuestionValue {
  constructor (
    public id: string,
    public question: Question,
    public value: any
  ) {}
}
