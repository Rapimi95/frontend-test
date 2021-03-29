export class Subject {

  constructor (
    private _id: number,
    private _name: string,
    private _slug: string,
    private _image: string,
    private _sypnosis: string,
    private _instructor: number,
  ) { }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get slug(): string {
    return this._slug;
  }

  get image(): string {
    return this._image;
  }
  
  get sypnosis(): string {
    return this._sypnosis;
  }

  get instructor(): number {
    return this._instructor;
  }

}