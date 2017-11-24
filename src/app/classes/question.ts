import _default from '@angular/cli/tasks/build';
export class Question {
  constructor (
    public number: number,
    public header: string,
    public type: QuestionType,
    public typeValues: string [],
    public vertical?: boolean,
    private _defaultValue?: any) {
      this.defaultValue = _defaultValue;
    }

  public value: any;
  public id: number;
  public orderNumber: number;

  get defaultValue(): any {
    return this._defaultValue;
  }
  set defaultValue(defaultValue: any) {
    this._defaultValue = defaultValue;
    console.log(defaultValue);
    if (defaultValue || defaultValue === 0) {
      this.value = defaultValue;
      console.log('value set --> ' + defaultValue);
    }

  }
}

export enum QuestionType {
  Number,
  String,
  List,
  YesNo,
  Range
}
