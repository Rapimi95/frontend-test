export class Lesson {

  constructor (
    private _id: number,
    private _instructor: number,
    private _subject: number,
    private _beginning: number,
    private _finish: number,
  ) { }

  get id(): number {
    return this._id;
  }

  get instructor(): number {
    return this._instructor;
  }
  
  get subject(): number {
    return this._subject;
  }
  
  get beginning(): number {
    return this._beginning;
  }
  
  get finish(): number {
    return this._finish;
  }

}