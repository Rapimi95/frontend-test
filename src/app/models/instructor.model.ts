export class Instructor {

  constructor ( 
    private _id: number,
    private _name: string,
    private _slug: string,
    private _image: string,
    private _skills: [string, string?, string?],
    private _color: string = '#555555',
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
  
  get skills(): [string, string?, string?] {
    return this._skills;
  }

  get color(): string {
    return this._color;
  }

}