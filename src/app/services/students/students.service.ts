import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  students: Student[] = [
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 5, 6, 7, 8 , 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 6, 7, 8 , 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 8, 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 3, 5, 6, 7, 8, 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 7, 8 , 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 5, 6, 7, 8 , 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 6, 7, 8 , 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 2, 3, 4, 5, 6, 8, 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1, 3, 5, 6, 7, 8, 9, 10]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1]),
    new Student(1, '/assets/images/profile_picture.jpeg', [1]),
  ];

  constructor() { }

  getByInstructors(id: number): Student[] {
    return this.students.filter( student => student.instructors.includes(id) );
  }

}
