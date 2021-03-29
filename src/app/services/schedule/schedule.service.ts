import { Injectable } from '@angular/core';
import { Lesson } from 'src/app/models/lesson.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private schedule: Lesson[] = [
    new Lesson(1, 1, 1, 9, 10.5),
    new Lesson(2, 1, 1, 12.5, 14),
    new Lesson(3, 1, 1, 15.5, 17),
    new Lesson(4, 2, 2, 9, 10.5),
    new Lesson(5, 2, 3, 12, 13.5),
    new Lesson(6, 2, 2, 14.5, 16),
    new Lesson(7, 3, 4, 8.5, 10),
    new Lesson(8, 3, 5, 11, 13),
    new Lesson(9, 3, 4, 15, 16.5),
    new Lesson(10, 4, 6, 9.5, 11),
    new Lesson(11, 4, 7, 12.5, 14.5),
    new Lesson(12, 4, 6, 15, 16.5),
    new Lesson(13, 5, 8, 8.5, 10),
    new Lesson(14, 5, 8, 11, 12.5),
    new Lesson(15, 5, 8, 13.5, 15),
    new Lesson(16, 6, 9, 8.25, 10.75),
    new Lesson(17, 6, 9, 11.75, 14.25),
    new Lesson(17, 6, 9, 15, 17),
  ]

  constructor() { }

  getAll(): Lesson[] {
    return this.schedule
  }

  addLesson(lesson: Lesson): void {
    console.log(lesson);
    
    this.schedule.push(lesson);
  }

}
