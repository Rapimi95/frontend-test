export class Project {

  constructor ( 
    private _id: number,
    private _image: string,
    private _instructors: number[],
  ) { }

  get id(): number {
    return this._id
  }
  
  get image(): string {
    return this._image
  }

  get instructors(): number[] {
    return this._instructors
  }

}