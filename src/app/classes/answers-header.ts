import { QuestionValue } from './question-value';
export class AnswersHeader {
  constructor (
    public id: string,
    public created: Date,
    public updated: Date,
    public note: string,
    public questionValues: QuestionValue[]
  ) {}
}
